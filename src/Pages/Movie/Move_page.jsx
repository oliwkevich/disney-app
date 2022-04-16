import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";

export const Move_page = (resp) => {
  const [movie, setMovie] = useState({});
  const API_KEY = "142674a7c80d99dd2582c01bb42056fe";
  const IMG_URL = "https://image.tmdb.org/t/p/w500/";
  let { id } = useParams();
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU&append_to_response=videos`
    );
    console.log("movie", data);
    setMovie(data);
  };
  const index = movie.videos?.results.findIndex((el) => el.type === 'Trailer');
  const VIDEO_URL = `https://www.youtube.com/watch?v=${movie.videos?.results[index]?.key}`;

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <section>
        <div>
          <img
            src={
              `${IMG_URL}${movie.backdrop_path || movie.poster_path}` ||
              `${IMG_URL}${movie.poster_path}`
            }
            className="w-screen"
            alt="bg"
          />
        </div>
        <div className="m-3 space-y-5">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {movie.title}
            </h1>
          </div>
          <div>
            <p className="text-xs md:text-sm mb-2 font-bold">
              {movie.release_date || movie.first_air_date} •{" "}
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m •{" "}
              <p className="uppercase my-4 text-slate-500">
                  {movie.genres?.map((genre) => genre.name + " | ")}
              </p>
            </p>
            <h4 className="text-xs md:text-lg lg:text-2xl max-w-4xl my-2">
              {movie.overview}
            </h4>
          </div>
          <div className="flex items-center space-x-3 md:space-x-5">
            <button
              className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center
          justify-center py-2.5 px-6 rounded hover:bg-[#6c6c6c] "
            >
              <BsFillPlayFill className="h-6 md:h-8" />
              <span className="font-medium tracking-wide">PLAY</span>
            </button>
            <a
              target="_blank"
              className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
              href={VIDEO_URL}
            >
              <BsFillPlayFill className="h-6 md:h-8" />
              <span className="uppercase font-medium tracking-wide">
                Trailer
              </span>
            </a>
            <div
              className="rounded-full border-2 border-white hover:bg-white hover:text-black          
              flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60"
            >
              <AiOutlinePlus className="h-6 w-6 " />
            </div>
            <div
              className="rounded-full border-2 border-white hover:bg-white hover:text-black
          flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60"
            >
              <MdGroups className="h-6 w-6" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
