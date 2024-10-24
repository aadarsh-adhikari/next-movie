import Image from "next/image";
import TrailerButton from './../../components/trailerbutton';
import Recommendation from './../../components/recomendation';
import Link from "next/link";
const Description = async ({ params }) => {
  const url =
    params.type === "tv"
      ? `https://api.themoviedb.org/3/tv/${params.id}?api_key=98eb648b55eff2eab4ec20615d2ab1d0&append_to_response=videos`
      : params.type === "movie"
      ? `https://api.themoviedb.org/3/movie/${params.id}?api_key=98eb648b55eff2eab4ec20615d2ab1d0&append_to_response=videos`
      : "error";

  const response = await fetch(url);
  const data = await response.json();

  const trailer = data.videos.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row h-full bg-slate-900 shadow-lg rounded-lg overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
          alt={`Poster of ${data.title || data.name}`}
          width={500}
          height={750}
          className="rounded-l-lg h-auto w-auto max-h-[50vh] m-4 "
        />
        <div className="p-6 w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">
            {data.title || data.name}
          </h1>
          <div className="flex items-center mb-4">
            <p className="text-xl text-white">
              ⭐ {data.vote_average}
              <span className="text-gray-200">/10</span>
            </p>
            <p className="ml-4 text-md text-gray-200">
              {data.release_date || data.first_air_date}
            </p>
          </div>
          <p className="text-lg text-gray-200 mb-4">{data.overview}</p>
          <div className="mb-2">
            <strong className="text-gray-200">Genres:</strong>
            <div className="flex flex-wrap mt-1">
              {data.genres.map((genre) => (
                <Link

                href={{
                  pathname: `/genres/${encodeURIComponent(genre.name)}`,  
                  query: { type: data.title ? 'movie' : 'tv', id:genre.id }, 
                }}   
                  key={genre.id}
                  className="bg-gray-800 text-sm text-orange-200 mb-1 hover:text-gray-800 hover:bg-orange-200 transition-text ease-in-out duration-700 mr-2 p-2 rounded"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-sm text-gray-200 mb-4">
            <strong>Runtime:</strong> {data.runtime || data.episode_run_time[0]}{" "}
            minutes
          </div>
          {trailer && (
            <TrailerButton trailerKey={trailer.key} title={data.title || data.name} />
          )}
        </div>
      </div>
      <Recommendation id={params.id} type={params.type} />
    </div>
  );
};

export default Description;
