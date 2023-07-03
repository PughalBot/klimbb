import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../redux/actions';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showError, setShowError] = useState(false); // State to track if the error should be shown

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      setShowError(true); // Set showError to true when there's an error
    } else {
      dispatch(searchMovies(query));
      setShowError(false); // Set showError to false when there's no error
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-4">
      <input
        type="text"
        placeholder="Enter an actorname"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-l-lg text-black focus:outline-none"
        style={{
          backgroundColor: 'rgba(55, 65, 81, var(--tw-text-opacity))',
          border: 'none',
          color: 'white',
          minWidth: '100px',
          masWidth: '300px',
        }}
      />
      <button
        type="submit"
        disabled={query.trim() === ''}
        className="bg-red-600 px-6 py-2 rounded-r-lg text-white font-semibold focus:outline-none"
      >
        Search
      </button>
      {showError && query.trim() === '' && (
        <p className="ml-4 text-red-500 text-sm">Please enter an actor's name</p>
      )}
    </form>
  );
};

export default SearchBar;
