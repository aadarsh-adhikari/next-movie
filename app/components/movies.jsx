import MediaCard from './mediacard';
const Movies = async () => {
  let movies = [];
  let error = null;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=1`,
      { cache: 'no-store' }
    );
    const response2 = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=2`,
      { cache: 'no-store' }
    );
    const data = await response.json();
    const data2 = await response2.json();

    movies = [...data.results, ...data2.results];
  } catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-6 text-white">Discover Movies</h1>
      {error ? (
        <div className="text-red-500">Error fetching movies: {error}</div>
      ) : (
        <MediaCard media={movies}  type="movie"  />
      )}
    </div>
  );
};

export default Movies;
