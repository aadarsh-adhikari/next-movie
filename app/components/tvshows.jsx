import MediaCard from './mediacard';

const Tvshows = async () => {
  let shows = [];
  let error = null;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=98eb648b55eff2eab4ec20615d2ab1d0&language=en-US&page=1`,
      { cache: 'no-store' }
    );
    const response2 = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=98eb648b55eff2eab4ec20615d2ab1d0&language=en-US&page=2`,
      { cache: 'no-store' }
    );
    const data = await response.json();
    const data2 = await response2.json();
    shows = [...data.results, ...data2.results];
} catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-6 text-white">Discover Shows</h1>
      {error ? (
        <div className="text-red-500">Error fetching shows: {error}</div>
      ) : (
        <MediaCard media={shows}  type="tv"/>
      )}
    </div>
  );
};

export default Tvshows;
