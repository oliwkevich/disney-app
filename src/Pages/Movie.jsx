import React from "react";
import { Navigate } from "react-router-dom";

export const Movie = () => {


  if (!window.localStorage.getItem("TokenAPI")) {
    return <Navigate to="/login" />;
  }

  return <div>Movie</div>;
};
