import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import { Image } from '../components/Images';
import Search from '../components/Search';
import MovieList from '../components/MovieList';
import Modal from '../components/Modal'
import {requests, baseUrl} from '../utilities/request';
import { RevolvingDot} from 'react-loader-spinner';

const base_Url = baseUrl;

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searched, setSearched] = useState(false)
  const [content, setContent] = useState(<></>);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const UTC =movie?.release_date
  const date = new Date(UTC).toDateString()

      const openModal= () =>{
            setIsModalOpen(true)
      }

      const closeModal = () => {
            setIsModalOpen(false);
          };
  
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`${base_Url}/movie/${id}`, requests()); // Use requests() here
        if (response.status === 200) {
          const movieDetails = response.data;        
          setMovie(movieDetails);
        } else {
          console.error('Movie not found.');
          setMovie(null);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovie(null);
      } finally {
        setLoading(false); // Set loading to false when done fetching
      }
    }


    fetchMovieDetails();
  }, [id]);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setSearched(true);

      const response = await axios.get(`${baseUrl}/search/movie`, {
        ...requests(), // Spread the requests() function here
        params: {
          ...requests().params, // Spread the params as well
          query,
        },
      });

      const searchResults = response.data.results;
      setMovies(searchResults);

      // Open the modal after search
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

 

  useEffect(() => {
        if (searched) {
          // Use setContent to set the content to the MovieList component
          setContent(<MovieList movies={movies} loading={loading} />);
          openModal(); // Open modal after setting content
        }
      }, [searched, movies, loading]);

      // if (loading) {
      //   return (
      //     <div className="flex justify-center items-center h-screen">
      //       <RevolvingDot type="Puff" color="#00BFFF" height={50} width={50} />
      //     </div>
      //   );
      // }
  return (
    <div>
      
      {movie ? (
        <div className='block'>
          <div className=' flex bg-black h-20 flex-nowrap sm:px-0 px-4  lg:px-0 justify-between  py-5'>
                 <a href='/'> 
                 <Image alt='logo' path={"logo.svg"} data-testid='logo' className='h-10 ' />
                 </a>
                  <div>
                        <Search  onSearch={handleSearch} />
                  </div>
                  
                  {/* <div className='hidden sm:inline-flex space-x-4 ml-3 mt-6 md:mt-0 lg:mt-0'>
                        <h4 className='text-white text-base font-bold leading-normal font text-center mt-2'>
                              Signin
                        </h4>
                        <Image className=' bg-red-700 rounded-3xl p-2' path={'menualt4.svg'}/>
                  </div> */}
                 
            </div>
           
            <div className='flex h-screen space-x-5'>
            <Sidebar/>
              <div className='block h-screen'>
                      <div className='relative mr-16 justify-items-center items-center'>
                        <img alt='killo' className=' inset-0 -z-10  object-cover h-[396px] w-full mt-2 justify-start items-center shadow-md rounded-md '  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
                        {/* <Image alt="hello" className="mt-36 ml-20 sm:ml-96 rounded-full w-28 h-28 justify-center cursor-pointer items-center gap-30 inline-flex bg-white bg-opacity-30 shadow border border-gray-200 border-opacity-20 backdrop-blur-sm " path={'play.svg'}/> */}
                      </div>
                      <div className='sm:flex  mt-10 justify-between'>
                            <h2 data-testid="movie-title" className='text-neutral-700 w-72 sm:text-lg font-bold'> {movie.title}</h2>
                            {/* <span className='hidden sm:inline-flex rounded-full  h-1 w-1 mt-3 ml-2 mr-2 bg-gray-700'></span> */}

                            <h2 data-testid="movie-release-date" className='text-neutral-700 sm:text-lg  font-bold'> {date && date}</h2>
                            <div className='flex'>
                              {/* <span className='hidden sm:inline-flex rounded-full  h-1 w-1 mt-3 ml-2 mr-2 bg-gray-700'></span> */}
                              {/* <p className=' mr-2 text-neutral-700 sm:text-xl font-bold'>Runtime (in  minutes):</p> */}
                              <h2 data-testid="movie-runtime" className='text-neutral-700 w-80 sm:text-lg font-bold'> {movie.runtime}m</h2>
                            </div>
                      </div> 
                      <div className='sm:flex'>
                            <div>
                                  <p data-testid="movie-overview" className='mt-5 w-80 sm:w-9/12 mr-7'>{movie.overview}</p> 
                            </div>
                            <div className='mt-5 sm:mr-20 block'>
                                  <button className='w-72 h-14 bg-rose-700 rounded-lg'>
                                        see Showtimes
                                  </button>
                                  <button className='w-72 h-14 bg-rose-700 bg-opacity-10 rounded-lg border border-rose-700 mt-4'>
                                        More watch options
                                  </button>
                            </div>
                      </div>
              </div>
             </div> 
           <Modal isOpen={isModalOpen} onClose={closeModal} children={content} />
        </div>
      ): loading ? ( // Display loader only while loading
      <div className="flex justify-center items-center h-screen">
        <RevolvingDot type="Puff" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
        <p className='font'>Movie not found.</p>
        
      )}
    </div>
  );
}

export default MovieDetails;
