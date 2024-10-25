import React from 'react';
import Searchcard from './searchcard';

const Search = async ({ query }) => {
  let movies = [];
  let error = null;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API}&query=${encodeURIComponent(query)}`
    );
    const response2 = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_API}&query=${encodeURIComponent(query)}`
    );

  
    const data = await response.json();
    const data2 = await response2.json();

    movies = [...data.results, ...data2.results];

    movies.sort((a, b) => b.vote_average - a.vote_average);
  } catch (err) {
    error = err.message;
  }

  return (
    <div >
      <h1 className="text-2xl font-bold mb-3 ml-2 ">Movies & TV Shows (Sorted by Rating)</h1>
      {error ? (
        <div className="text-red-500">Error fetching data: {error}</div>
      ) : (
        <Searchcard movies={movies} />
      )}
    </div>
  );
};

export default Search;
