"use client";
import { useState } from "react";

const TrailerModal = ({ trailerKey, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-block bg-red-600 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Watch Trailer
        </button>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-auto p-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={`${title} Trailer`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-5xl text-white absolute top-0 right-0 hover:text-red-700"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailerModal;
