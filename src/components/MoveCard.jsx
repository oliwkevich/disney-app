import React from 'react'

export const MoveCard = ({movies}) => {

    const IMG_URL = 'https://image.tmdb.org/t/p/w500/'

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] 
      md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden 
      shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] 
      border-opacity-10  hover:border-opacity-80 hover:shadow-2xl 
      transform hover:scale-105 transition duration-300"
    >
      <img
        src={
          `${IMG_URL}${movies.backdrop_path || movies.poster_path}` ||
          `${IMG_URL}${movies.poster_path}`
        }
        // src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        width={330}
        height={210}
        objectfit="cover"
        className="rounded-lg"
      />
    </div>
  )
}
