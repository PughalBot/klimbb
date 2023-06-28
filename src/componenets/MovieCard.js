import React from 'react';

const MovieCard = ({ movie }) => {
  const { title, release_date, poster_path } = movie;

  return (
    <div className="bg-red-600 border-2 border-red-600 hover:border-white flex-col w-80 h-full flex items-center bg-opacity-25 hover:bg-opacity-100 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
        className="w-60 mt-2 h-auto rounded-lg mb-2"
      />
      <div className="text-center">
        <h2 className="text-lg text-white font-semibold">{title}</h2>
        <p className="text-md mt-2 mb-4 text-gray-400">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
