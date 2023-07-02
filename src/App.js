import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import { searchMovies } from './redux/actions'; 
import './index.css'
const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(12);

  const movies = useSelector((state) => state.movies);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies()); // Fetch initial set of movies when the component mounts
  }, [dispatch]);

  // Get current movies based on pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white font-bold mb-8">Movie Search App</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full sm:max-w-lg md:max-w-3xl mx-auto">
      <h1 className="w-full flex justify-center text-3xl font-medium mb-4 ">Search Movies By Actor Name</h1>
        <SearchBar />
        {error && <p className="mt-4 flex justify-center text-red-500">{error}</p>}
        {movies.length === 0 && !error && (
          <p className="mt-4 text-center text-red-600">No movies found for the specified actor.</p>
        )}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        {movies.length > moviesPerPage && (
          <div className="flex justify-center mt-16">
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button
            key={pageNumber}
            className={`w-6 h-8 mx-1 mb-8 rounded ${
              pageNumber + 1 === currentPage ? 'bg-red-600 text-white' : 'bg-white text-red-500'
            }`}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
        )}
      </div>
    </div>
  );
};

export default App;
