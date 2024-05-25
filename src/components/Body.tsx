import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#131039] via-[#4db89a] to-[#71a899]">
      <p>Body</p>
      <p>Body1</p>
      <p>Body2</p>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
