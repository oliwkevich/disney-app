import React, { useEffect, useState } from "react";
import axios from "axios";

export const MoviesCollection = () => {
  const [movies, setMovies] = useState([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "142674a7c80d99dd2582c01bb42056fe";

  const fetchMovies = async () => {
    const {data: { results }} = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`);

    console.log("results", results);
    setMovies(results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderMovies = () =>
    movies.map((movie) => (
      <div
        key={movie.id}
        className="relative flex flex-col space-y-2 my-10 
      px-8 max-w-[1400px] mx-auto"
      >
        <h2 className="font-semibold">{movie.title}</h2>
      </div>
    ));

  return (
    <div>
      <h1>Popular Films</h1>
      {renderMovies()}
    </div>
  );
};









//БЫЛО ВОТ ТАК

/*
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/top_rated`, {
      params: {
        api_key: "142674a7c80d99dd2582c01bb42056fe",
      },
    });
    */