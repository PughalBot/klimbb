import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';

const SearchBar = () => {
  const [actorName, setActorName] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (actorName.trim() === '') {
      return;
    }

    dispatch(fetchMovies(actorName));
  };

  return (
    <div className="flex items-centermb-4 w-96 ">
      <input
        type="text"
        value={actorName}
        onChange={(e) => setActorName(e.target.value)}
        className="p-2 border border-red-600 text-red-600 rounded-l-md bg-black bg-opacity-25 focus:bg-white focus:outline-none flex-1 mr-2 rounded-l-lg"
        placeholder="Enter actor's name"
      />
      <button
        className="bg-red-500 bg-opacity-25 border border-red-600 text-white py-2 px-6 rounded-r-md transition-colors duration-300"
        onClick={handleSearch}
        disabled={!actorName.trim()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
