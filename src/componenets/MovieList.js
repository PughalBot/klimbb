import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import Footer from './Footer';

const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12; // Number of movies to display per page

  // Calculate the total number of pages
  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderMovies = () => {
    
    if (movies.length === 0) {
        return (
          <div className='w-[1080px] flex items-center mx-96  my-40'>
            <p className="text-5xl text-white">Search for movies based on actors</p>
          </div>
        );
      }

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    if (currentMovies.length === 0) {
        return <div className='w-[1080px] h-full flex items-center mx-96 my-40'>
        <p className="text-5xl text-white">No records found for the actor name</p></div>;
      }

    return currentMovies.map((movie) => (
      <div className='mx-4'
        key={movie.id}
      >
        <MovieCard movie={movie} />
      </div>
    ));
  };

  return (
    <div>
      <div className="h-full px-4 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {renderMovies()}
      </div>
      <div className="flex justify-center mt-16">
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`w-6 h-8 mx-1 mb-8 rounded ${
              pageNumber + 1 === currentPage ? 'bg-red-600 text-white' : 'bg-red-900 text-gray-400'
            }`}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MovieList;
