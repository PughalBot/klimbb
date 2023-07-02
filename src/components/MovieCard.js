import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-red-600 border-2 border-red-600 hover:border-white bg-opacity-25 hover:bg-opacity-100 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg max-w-xs mx-auto mb-4">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h2 className="text-md font-bold">{movie.title}</h2>
      <p className="text-gray-600">Release Date: {movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
