import React from "react";
import { Link } from "react-router-dom";
import { AllArticlesType } from "../pages/ShowAllArticles";

const Article: React.FC<AllArticlesType> = ({ id, title, summary }) => {
  return (
    <Link to={`/${id}`}>
      <div className="bg-white h-64 w-72 p-4 m-2 rounded-lg justify-center items-center shadow-xl opacity-90 hover:opacity-100">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-justify pt-5 ">{summary}</p>
      </div>
    </Link>
  );
};

export default Article;
