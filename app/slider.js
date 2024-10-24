"use client"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import react, { useState } from "react";

const Slider = () => {
    const images = [
        {
          src: "https://upload.wikimedia.org/wikipedia/en/6/6f/Dexter_season_2_DVD.png",
          alt: "Picture of Dexter",
          description: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit up again with an even more reluctant Wolverine.",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg",
          alt: "Deadpool Poster",
          description: "Deadpool, a former special forces operative turned mercenary, is subjected to a rogue experiment that leaves him with accelerated healing powers and a twisted sense of humor.",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/en/f/fb/12_Monkeys_Intertitle.png",
          alt: "Deadpool Poster",
          description: "Deadpool, a former special forces operative turned mercenary, is subjected to a rogue experiment that leaves him with accelerated healing powers and a twisted sense of humor.",
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

 
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex items-center justify-center w-full mt-3 relative">
    <button
      onClick={handlePrev}
      className="m-[-32px] text-2xl bg-gray-200 rounded-full z-10 cursor-pointer hover:bg-gray-300 transition-all duration-300"
      aria-label="Previous"
    >
      <IoIosArrowBack />
    </button>

    <Image
      src={images[currentIndex].src}
      width={500}
      height={500}
      alt={images[currentIndex].alt}
      className="h-[70vh] w-[80%] object-fill"
    />
    
    <div className="z-50 absolute bottom-9 bg-slate-600 bg-opacity-55 p-4 rounded w-[70%] text-white text-center">
      <p className="mb-2">{images[currentIndex].description}</p>
      <button className="bg-blue-600 py-2 px-4 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-blue-700">
        Watch Now
      </button>
    </div>

    <button
      onClick={handleNext}
      className="m-[-32px] text-2xl bg-gray-200 rounded-full z-10 cursor-pointer hover:bg-gray-300 transition-all duration-300"
      aria-label="Next"
    >
      <IoIosArrowForward />
    </button>
  </div>
  )
}

export default Slider
