import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Searchcard = ({ movies }) => {
  return (
    <section className="m-4">
      <div className="w-full grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies
          .filter((item) => item.poster_path) 
          .map((item) => (
            <Link 
              href={{
                pathname: `/overview/${item.id}`,  
                query: { type: item.title ? 'movie' : 'tv' }, 
              }} 
              key={item.id}
            >
              <article className="max-w-md relative rounded-md group h-fit overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={`Poster of ${item.title || item.name}`}
                  width={500}
                  height={750}
                  className="w-full h-fit object-fill group-hover:scale-110 group-hover:opacity-40 rounded-sm transition-all duration-150 ease-in-out"
                />
                <div className="py-2 sm:py-4 absolute inset-0 bottom-[-100%] hover:bottom-0 invisible group-hover:visible transition-all ease-in-out duration-500 font-semibold flex justify-center flex-col items-center">
                  <h2 className="text-sm xs:text-lg text-center m-2 mb-2">
                    {item.title || item.name}
                  </h2>
                  <div className="flex gap-1 lg:gap-3 cursor-text">
                    <p>⭐{Math.floor(item.vote_average * 10) / 10}</p>
                  </div>
                  <p className="text-xs mt-1">
                    {item.title ? 'Movie' : 'TV Series'}
                  </p>
                </div>
              </article>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Searchcard;
