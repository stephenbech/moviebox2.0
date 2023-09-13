import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import {ChevronRightIcon} from '@heroicons/react/24/outline'
import axios  from 'axios'
import MovieList from '../components/MovieList';
import { Image } from '../components/Images'
import Search from '../components/Search';
import Modal from '../components/Modal'
import {baseUrl, apiKey} from '../utilities/request';

const api_Key = apiKey;
const base_Url = baseUrl;


function Home() {
      const [movies, setMovies] = useState([]);
      const [loading, setLoading] = useState(false);
      const [searched, setSearched] = useState(false)
      const [content, setContent] = useState(<></>);
      const [isModalOpen, setIsModalOpen] = useState(false);
      const openModal= () =>{
            setIsModalOpen(true)
      }

      const closeModal = () => {
            setIsModalOpen(false);
          };
  
      const handleSearch = async (query) => {
        try {
            setLoading(true);
            setSearched(true);
           
          const response = await axios.get(`${base_Url}/search/movie`, {
            params: {
              api_key: api_Key,
              query,
            },
          });
    
          const searchResults = response.data.results;
          setMovies(searchResults);
          console.log(searchResults);
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
      
  return (
    <div className='block '>

                  <div>
                        
                        <div className=' flex flex-nowrap px-4 justify-around  mt-5'>
                              <Image alt='logo' path={"/Logo.svg"} data-testid='logo' className='h-10 ' />
                              <div>
                                    <Search  onSearch={handleSearch} />
                              </div>
                              
                              <div className='hidden sm:inline-flex space-x-4 ml-3 mt-6 md:mt-0 lg:mt-0'>
                                    <h4 className='text-white text-base font-bold leading-normal font text-center mt-2'>
                                          Signin
                                    </h4>
                                    <Image className=' bg-red-700 rounded-3xl p-2' path={'/Menualt4.svg'}/>
                              </div>
                        </div>
                        
                        <Header/>
                        
                        <div className='absolute w-11/12 mx-3 lg:mx-14  top-full'>
                              <div className=" mt-10 h-12 flex ">
                                    <div className="font text-black text-2xl sm:text-4xl flex-1 font-bold">Featured Movie</div>
                                    <div className=" flex gap-x-2 items-center ">
                                          <div className=" font text-rose-700 sm:text-lg font-normal leading-normal">See more</div>
                                          <div className="ChevronRight w-5 h-5 text-rose-700 relative" >
                                                <ChevronRightIcon/>
                                          </div>
                                    </div>
                              </div>
                              <div className='justify-center mt-10 align-middle'>
                                    <Card data-testid="movie-card"/>
                              </div>
                              <div className="Footer mt-20 w-full flex-col inline-flex items-center gap-9 ">
                                    <div className="Social justify-start items-center gap-12 inline-flex" >
                                          <Image path={"/facebook.svg"} className="FaBrandsFacebookSquare w-6 h-7 relative" />
                                          <Image path={"/instagram.svg"} className="FaBrandsInstagram w-6 h-7 relative" />
                                          <Image path={"/twitter.svg"} className="FaBrandsTwitter w-6 h-6 relative" />
                                          <Image path={"/youtube.svg"} className="FaBrandsYoutube w-6 h-5 relative" />
                                    </div>
                                    <div className="Links justify-start items-start gap-4 inline-flex">
                                          <div className="ConditionsOfUse text-gray-900 text-base font sm:text-lg font-bold">Conditions of Use</div>
                                          <div className="PrivacyPolicy text-gray-900 text-base font sm:text-lg font-bold">Privacy & Policy</div>
                                          <div className="PressRoom text-gray-900 text-base sm:text-lg font-bold font">Press Room</div>
                                    </div>
                                    <div className="font text-gray-500 text-lg font-bold">© 2021 MovieBox by Adriana Eka Prayudha  </div>
                              </div>
                        </div>
                  </div>
                  <Modal isOpen={isModalOpen} onClose={closeModal} children={content} />
    </div>
  )
}

export default Home