
import MediaCard from './mediacard';

const Recommendation = async ({ id, type }) => {
  const url =
    type === "tv"
      ? `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API}`
      : `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API}`;

  const response = await fetch(url);
  const data = await response.json();

  return (
    <div className="mt-10">
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Recommendations</h2>
    <MediaCard media={data.results} type={type} />
  </div>
  );
};

export default Recommendation;
