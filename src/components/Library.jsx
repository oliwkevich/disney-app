import React from "react";
import disnep from "../assets/pictures/disnep.png";
import disnep_v from "../assets/videos/disney.mp4";

import pixar from "../assets/pictures/pixar.png";
import pixar_v from "../assets/videos/pixar.mp4";

import marvel from "../assets/pictures/marvel.png";
import marvel_v from "../assets/videos/marvel.mp4";

import starwars from "../assets/pictures/starwars.png";
import starwars_v from "../assets/videos/star-wars.mp4";

import nationaGeographic from "../assets/pictures/national-geographic.png";
import nationaGeographic_v from "../assets/videos/national-geographic.mp4";

export const Library = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="brand group">
        <img src={disnep} layout="fill" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src={disnep_v} type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <img src={pixar} layout="fill" objectfit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src={pixar_v} type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <img src={marvel} layout="fill" objectfit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src={marvel_v} type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <img src={starwars} layout="fill" objectfit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src={starwars_v} type="video/mp4" />
        </video>
      </div>

      <div className="brand group">
        <img src={nationaGeographic} layout="fill" objectfit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src={nationaGeographic_v} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
