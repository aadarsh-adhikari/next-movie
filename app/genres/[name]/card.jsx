import Image from 'next/image';
import Link from 'next/link';

const Gcard = async ({ params }) => {
  let data = [];

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${params.type}?api_key=${process.env.NEXT_PUBLIC_API}&with_genres=${params.id}`
    );

    data = await response.json();
   
    return (
      <section className="m-4">
        <h1 className='text-2xl text-white m-2 mb-4 lg-m-6 capitalize'>{params.name} {params.type}
        </h1>
        <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-4 text-white">
          {data?.results?.length > 0 ? (
            data.results.slice(0, 18).map((item) => (
              <article
                key={item.id}
                className="max-w-md relative rounded-md group h-fit overflow-hidden"
              >
                <Link
                  href={{
                    pathname: `/overview/${item.id}`,
                    query: { type: params.type }, // Pass the content type (movie or tv)
                  }}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={`Poster of ${params.type === 'movie' ? item.title : item.name}`}
                    width={500}
                    height={750}
                    className="w-full h-fit object-fill group-hover:scale-110 group-hover:opacity-40 rounded-sm transition-all duration-150 ease-in-out"
                  />
                  <div className="py-2 sm:py-4 absolute inset-0 bottom-[-100%] hover:bottom-0 invisible group-hover:visible transition-all ease-in-out duration-500 font-semibold flex justify-center flex-col items-center">
                    <h2 className="text-sm xs:text-lg text-center mb-2">
                      {params.type === 'movie' ? item.title : item.name}
                    </h2>
                    <div className="flex gap-1 lg:gap-3 cursor-text">
                      <p>⭐{Math.floor(item.vote_average * 10) / 10}</p>
                      <p>
                        {params.type === 'movie'
                          ? item.release_date.split('-')[0]
                          : item.first_air_date.split('-')[0]}
                      </p>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <p>No results found for {params.name}.</p>
          )}
        </div>
      </section>
    );
  } catch (error) {
    return <p>Error fetching data: {error.message}</p>;
  }
};

export default Gcard;
