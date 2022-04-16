import React from "react";
import { Navigate } from "react-router-dom";
import { Library } from "../components/Library";
import { Slider } from "../components/Slider";
import { MoviesCollection } from "./Movie/MoviesCollection";

export const Home = () => {
  if (!window.localStorage.getItem("TokenAPI")) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Slider />
      <Library />
      <MoviesCollection />
    </div>
  );
};
