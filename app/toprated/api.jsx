import MediaCard from "../components/mediacard";
const TopApi = async() => {
  let movies = [];
  let error = null;

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=1`);
    const response2= await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=2`);

    const data = await response.json();
    const data2 = await response2.json();
    movies = [...data.results, ...data2.results];
} catch (err) {
    error = err.message;
  }

  return (
    <div>
      <h1 className="text-2xl text-white m-2">20 Top rated moives</h1>
      <MediaCard media={movies} type="movie"/>
    </div>
  )
}

export default TopApi
