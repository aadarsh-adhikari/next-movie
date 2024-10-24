import React from 'react';
import Slider from './slider';
import Movies from './components/movies';
import Tvshows from './components/tvshows';
const Home = () => {
  return (
    <div className="flex flex-col">
      {/* <Slider /> */}
   <div className='md:mx-11'>
   <Movies />
   <Tvshows/>
   </div>
    </div>
  );
};

export default Home;
