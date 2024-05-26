import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ALL_ARTICLES_URL } from "../constants";
import { toast } from "react-toastify";
import { AllArticlesType } from "./ShowAllArticles";
import { error } from "console";

interface DetailedArticleResp extends AllArticlesType {
  fullText: string;
}
const DetailedArticle = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const [article, setArticle] = useState<DetailedArticleResp>({
    id: "",
    summary: "",
    fullText: "",
    title: "",
  });

  useEffect(() => {
    setLoading(true);

    fetch(`${ALL_ARTICLES_URL}/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch the article: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching the article:", error);

        toast.error(
          "An error occurred while fetching the article. Please try again."
        );
      });
  }, [id]);

  return (
    <div>
      {!loading && (
        <div className="h-screen  text-justify py-16 px-10 ">
          <h1>Detailed Article</h1>
          <h1 className="text-3xl font-bold mb-4 text-slate-50">
            {article?.title}
          </h1>
          <p className="text-lg text-slate-100">{article?.fullText}</p>
        </div>
      )}
    </div>
  );
};

export default DetailedArticle;
