'use client'
import { useState ,useEffect } from "react";
import MediaCard from "../components/mediacard";
const TopApi = () => {
  const [mediaType , setMediaType] = useState('movie');
  const [movies , setMovies] = useState([]);
  const [error , setError] = useState(null);

 useEffect(() =>{
  const fetchData = async()=>{
    try {
      const response = await fetch(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=1`);
      const response2= await fetch(`https://api.themoviedb.org/3/${mediaType}/top_rated?api_key=${process.env.NEXT_PUBLIC_API}&language=en-US&page=2`);
  
      const data = await response.json();
      const data2 = await response2.json();
      setMovies([...data.results, ...data2.results]);
  } catch (err) {
      setError(err.message);
    }
  }
  fetchData();
 }, [mediaType])


  return (
    <div className="mt-5 m-4">
<button
  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
  onClick={() => setMediaType('movie')}
>
  Movies
</button>
<button
  className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
  onClick={() => setMediaType('tv')}
>
  Series
</button>

        <h1 className="text-2xl text-white m-2">20 Top rated {mediaType} {mediaType =='tv' ? 'shows' : ''} </h1>
      <MediaCard media={movies} type={mediaType}/>
    </div>
  )
}

export default TopApi