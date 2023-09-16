import React from 'react'
import { Link} from 'react-router-dom'
import { Image } from './Images';
import {HeartIcon} from '@heroicons/react/24/outline'
import { RevolvingDot} from 'react-loader-spinner';

function MovieList({movies,  loading }) {
  console.log(movies)

  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RevolvingDot type="Puff" color="#00BFFF" height={50} width={50} />
      </div>
    );
  }

  return (
    <div >
      
      {movies && movies.length > 0 ? (movies.map((movie, index) => (
            <Link 
                  to={`/movies/${movie.id}`} 
                  key={index} 
                  className="MovieCard flex-col justify-start items-start gap-3 mx-4  w-24  my-4 inline-flex" 
                  data-testid="movie-card"
            >
                  <div className="Poster w-24 h-32 relative">
                        <div className="PosterImage w-24 h-32 left-0 top-0 absolute">
                              {/* <div className="Poster w-64 left-0 top-0 absolute " /> */}
                              <img data-testid="movie-poster" alt='' className="Poster w-24 h-32"  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                              {/* <h1>{movie.id}</h1> */}
                              {/* {movie.poster_path} */}
                        </div>
                        <div className="Rating w-24 h-7 left-[30px] top-[2.58px] absolute justify-center items-center gap-28 inline-flex">
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
                  <div data-testid="movie-release-date" className="Usa2016Current text-gray-400 text-xs font-bold">USA, {movie.release_date}</div>
                  <div data-testid="movie-title" className="StrangerThings w-24 font text-gray-900 text-sm font-semibold">{movie.title}</div>
                  <div className="Rating w-56 justify-between items-start block">
                        <div className="Imdb justify-start items-center gap-2.5 flex">
                              <Image alt='' className=" w-9 h-4" path={"imdb.svg"} />
                              <div className="0100 text-gray-900 text-xs font font-normal leading-3">86.0 / 100</div>
                        </div>
                        <div className="RottenTomatoes justify-start items-center gap-2.5 flex">
                        <Image alt='' className=" mt-2 w-4 h-4" path={"tomato.svg"} />
                              <div className=" text-gray-900 font text-xs font-normal leading-3">97%</div>
                        </div>
                  </div>
                  {/* <div className="ActionAdventureHorror text-gray-400 font mt-10 text-xs font-bold">Action, Adventure, Horror</div> */}
            </Link>
      ))):(<p>No movies found.</p>)}
    </div>
  );
}

export default MovieList;
