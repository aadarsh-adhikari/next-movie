import Image from "next/image";
import Link from "next/link";

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
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-white">
        {data.results.slice(0, 12).map((recommendation) => (
          <article key={recommendation.id} className="max-w-md relative rounded-md group h-fit overflow-hidden">
            <Link
              href={{
                pathname: `/overview/${recommendation.id}`, 
                query: { type: type === 'movie' ? 'movie' : 'tv' }, 
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${recommendation.poster_path}`}
                alt={recommendation.title || recommendation.name}
                width={500}
                height={750}
                className="w-full h-fit object-fill group-hover:scale-110 group-hover:opacity-40 rounded-sm transition-all duration-150 ease-in-out"
              />

              <div className="py-2 sm:py-4 absolute inset-0 bottom-[-100%] hover:bottom-0 invisible group-hover:visible transition-all ease-in-out duration-500 font-semibold flex justify-center flex-col items-center">
                <h3 className="text-sm xs:text-lg text-center mb-2">
                  {recommendation.title || recommendation.name}
                </h3>

                <div className="flex gap-1 lg:gap-3 cursor-text">
                  <p>⭐{Math.floor(recommendation.vote_average * 10) / 10}</p>
                  <p>{type === 'movie' ? recommendation.release_date.split('-')[0] : recommendation.first_air_date.split('-')[0]}</p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
