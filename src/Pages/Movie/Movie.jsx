import React from "react";
import { Navigate } from "react-router-dom";
import { Move_page } from "./Move_page";
import { MoviesCollection } from "./MoviesCollection";

export const Movie = () => {
  if (!window.localStorage.getItem("TokenAPI")) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <MoviesCollection/>
      {/* <Move_page/> */}
    </div>
  );
};
