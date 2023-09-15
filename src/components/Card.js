import React, {useState, useEffect} from 'react'
import {requests} from '../utilities/request';
import { Link, useParams} from 'react-router-dom'
import { Image } from './Images';
import { HeartIcon} from '@heroicons/react/24/outline'


function Card() {
      const[movies, setMovies] = useState([]);
      const {id} = useParams();
      useEffect(() => {
            // Define an async function to fetch the data
            async function fetchTopMovies() {
              try {
                const topMovies = await requests();
                
                const top10Movies = topMovies.slice(0, 10);
                setMovies(top10Movies);
                // Use the fetched data in your component
              } catch (error) {
                // Handle errors here
                console.error('Error fetching top movies:', error);
              }
            }
        
            // Call the async function when the component mounts
            fetchTopMovies();
          }, []); // The empty array [] ensures this effect runs once on mount
        
      // requests()
      // .then((topMovies) => {
      //   console.log('Top Movies:', topMovies);
      //   const top10Movies = topMovies.slice(0, 10);
      //   setMovies(top10Movies)
      //   // Use the fetched data in your component
      // })
      // .catch((error) => {
      //   // Handle errors here
      //   console.error('Error fetching top movies:', error);
      // });
return (
   <div className=' '>
      { movies.map((movie, index) => (
            <Link 
                  to={`/movie/${movie.id}`}
                  key={index} 
                  className="MovieCard flex-col justify-start items-start gap-3  w-48 ml-16 sm:ml-6 my-4 inline-flex
                  transition duration-300 delay-150 hover:delay-300 hover:ease-in-out" 
                  data-testid="movie-card"
            >
                  <div className="Poster w-44 h-72 relative">
                        <div className="PosterImage w-48 h-96 left-0 top-0 absolute">
                              <img 
                                    data-testid="movie-poster" alt=''
                                    className="Postertransition duration-300 delay-150 hover:delay-300 rounded-xl w-48"  
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                              />
                        </div>
                        <div className="Rating w-48 h-7 left-[2px] top-[15.58px] absolute justify-center items-center gap-20 inline-flex">
                              <div 
                                    className="TvSeries self-stretch px-2 py-0.5 bg-gray-100 
                                    bg-opacity-50 rounded-xl backdrop-blur-none justify-start 
                                    items-start gap-2 inline-flex"
                              >
                                    <div className="TvSeries text-gray-900 text-xs mt-1 font-bold">Movie</div>
                              </div>
                              <div className="Favorite w-7 h-7 relative">
                                    <div 
                                          className="Ellipse3 group w-7 h-7 left-0 top-0 absolute 
                                          bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-none" 
                                    />
                                    <HeartIcon 
                                          className="Heart hover:text-rose-700 hover:fill-rose-700 
                                          fill-gray-300 text-gray-300 w-5 h-5 left-[4px]  top-[4.87px] absolute" 
                                    />
                              </div>
                        </div>
                  </div>
                  <div data-testid="movie-release-date" className="Usa2016Current text-gray-900 text-xs font-bold">USA, {movie.release_date}</div>
                  <div data-testid="movie-title" className="StrangerThings w-44 font text-gray-900 text-sm font-semibold">{movie.title}</div>
                  <div className="Rating w-44 justify-between items-start gap-8 inline-flex">
                        <div className="Imdb justify-start items-center gap-2.5 flex">
                              <Image alt='' className=" w-9 h-4" path={"imdb.svg"} />
                              <div className="0100 text-gray-900 text-xs font font-normal leading-3">86.0 / 100</div>
                        </div>
                        <div className="RottenTomatoes justify-start items-center gap-2.5 flex">
                              <Image alt='' className=" w-4 h-4" path={"tomato.svg"} />
                              <div className=" text-gray-900 font text-xs font-normal leading-3">97%</div>
                        </div>
                  </div>
                  <div className="ActionAdventureHorror text-gray-400 font text-xs font-bold">Action, Adventure, Horror</div>
            </Link>
      ))}
   </div>
  )
}

export default Card