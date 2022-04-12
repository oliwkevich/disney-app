import React, { useEffect, useState } from "react";
import axios from "axios";
import { MoveCard } from "./MoveCard";

export const MoviesCollection = () => {
  const [movies, setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "142674a7c80d99dd2582c01bb42056fe";

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`
    );

    console.log("results", results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto">
      <h1 className="font-bold">Popular movie</h1>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {movies.map((movie) => (
          <MoveCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  );
};

//
