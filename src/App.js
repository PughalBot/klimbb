import React from 'react';
import SearchBar from './componenets/SearchBar';
import MovieList from './componenets/MovieList';
import './index.css'

const App = () => {
  return (
    <>
    <div className="pt-4 w-full h-fit bg-black">
    <div className='flex justify-end mr-10'>
      <SearchBar />
      </div>
      <MovieList />
    </div>
    </>
  );
};

export default App;
