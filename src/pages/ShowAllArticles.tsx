import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { ALL_ARTICLES_URL } from "../constants";
import Article from "../components/Article";
import Shimmer from "../components/Shimmer";

export interface AllArticlesType {
  id: string;
  title: string;
  summary: string;
}

const ShowAllArticles = () => {
  const [data, setData] = useState<AllArticlesType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetch(ALL_ARTICLES_URL);
        const parsedData: AllArticlesType[] = await data.json();
        const sortedData = parsedData.sort(
          (a, b) => parseInt(a.id) - parseInt(b.id)
        );

        setData(sortedData);
        setLoading(false);
      } catch (error: unknown) {
        setLoading(false);
        console.error("Error fetching articles:", error);
        toast.error(
          "An error occurred while fetching articles. Please try again."
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mx-5">
      {loading ? (
        <div className="flex flex-wrap ">
          {Array.from({ length: 10 }, (_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap ">
          {data.map((item: AllArticlesType) => (
            <Article key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllArticles;
