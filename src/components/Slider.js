import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from './Images';
import {baseUrl, apiKey} from '../utilities/request';

const api_Key = apiKey;
const base_Url = baseUrl;

function Slider() {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    async function fetchTopMovies() {
      try {
        const response = await axios.get(`${base_Url}/discover/movie`, {
          params: {
            api_key: api_Key,
            page: 1,
          },
        });

        // Access the response data
        const topMovies = response.data.results;
        setMovies(topMovies);
      } catch (error) {
        console.error('Error fetching top movies:', error);
      }
    }

    fetchTopMovies();
  }, []);

  useEffect(() => {
    // Automatically transition to the next movie every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 5000);

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [movies]);

  // const nextMovie = () => {
  //   setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  // };

  // const prevMovie = () => {
  //   setCurrentMovieIndex((prevIndex) =>
  //     prevIndex === 0 ? movies.length - 1 : prevIndex - 1
  //   );
  // };

  const currentMovie = movies[currentMovieIndex];

  return (
    <div className="movie-slider">
      {/* <div className="slider-buttons">
        <button onClick={prevMovie}>Previous</button>
        <button onClick={nextMovie}>Next</button>
      </div> */}
      {currentMovie && (
        <div className="movie-details">
          <img alt='poster' src={`https://image.tmdb.org/t/p/original/${currentMovie.poster_path}`} data-testid='movie-poster' className='absolute inset-0 -z-10 h-full  w-full object-cover'/>
          <div className="font w-96 ml-6 mt-14 lg:mt-36 lg:mx-40  flex-col justify-start items-start gap-4 inline-flex">
            <div data-testid='movie-title' className="font w-72 sm:w-96 text-white font text-lg sm:text-5xl font-bold leading-10">{currentMovie.title}</div>
            <div className="Rating relative">
                  <div className="Imdb w-28 h-4 left-0 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                        <Image alt="" className=" w-9 h-4" path={'imdb.svg'} />
                        <div className=" font text-white text-xs font-normal leading-3">86.0 / 100</div>
                  </div>
                  <div className="RottenTomatoes w-12 h-4 left-36 top-0 absolute justify-start items-center gap-2.5 inline-flex">
                        <Image alt='' className="Pngitem13810561 w-4 h-4" path={'tomato.svg'} />
                        <div className=" text-white text-xs font-normal font leading-3">97%</div>
                  </div>
            </div>
            {/* <p className="w-72 text-white text-sm font-medium leading-none">Release Date: {currentMovie.release_date}</p> */}
            <p data-testid='movie-overview' className="w-64 sm:w-96 text-white text-sm mt-3 font-medium leading-none">{currentMovie.overview}</p>
            <div className="Button px-4 py-1.5 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex">
                  <Image alt="play" path={'play.svg'} className="Play w-5 h-5 relative" />
                  <div className="WatchTrailer text-white text-sm font-bold font uppercase leading-normal">Watch trailer</div>
            </div>
          </div>
      
          {/* Add more movie details as needed */}
        </div>
      )}
    </div>
  );
}

export default Slider;
