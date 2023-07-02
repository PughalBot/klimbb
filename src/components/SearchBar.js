import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      setError('Please enter an actor\'s name');
    } else {
      dispatch(searchMovies(query));
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mb-4">
      <input
        type="text"
        placeholder="Enter actor's name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 rounded-lg shadow-inner outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        type="submit"
        disabled={query.trim() === ''}
        className="block w-full mt-4 px-4 py-2 rounded-lg bg-red-500 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Search
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </form>
  );
};

export default SearchBar;
