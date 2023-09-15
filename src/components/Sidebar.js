import React from 'react'
import SidebarRow from './SidebarRow'
import {ArrowRightOnRectangleIcon} from '@heroicons/react/24/outline'
function Sidebar() {
  return (
    <div className='hidden  lg:inset-y-0 lg:z-50 lg:flex  lg:flex-col'>
    <div className='x grow flex-col overflow-y-hidden hover:overflow-y-scroll border-r border-gray-200 bg-white  pb-4 w-64 h-auto overflow-x-hidden hidden sm:block border-2 shadow-md '>
      <a href='/'>
        <SidebarRow  src={'home.svg'} title="Home" /> 
      </a>
      <SidebarRow  src={'movie.svg'} title="Movies" />  
      <SidebarRow  src={'tvshow.svg'} title="TV series" />  
      <SidebarRow src={'calendar.svg'} title="Upcoming" />  
      <div className='w-40 mx-10 my-8 h-44 bg-pink-100 bg-opacity-40 rounded-2xl px-3 pt-8 border border-rose-700 border-opacity-70'>
            <p className='text-zinc-800 text-opacity-80 text-base font-semibold'>
            Play movie quizes and earn free tickets
            </p>
            <p className="KPeopleArePlayingNow text-stone-500 text-xs font-medium">50k people are playing<br/>now</p>
            <button className="Rectangle12 w-28 h-7 bg-rose-700 bg-opacity-20 text-rose-700 text-xs font-medium rounded-3xl" >
                  Start playing
            </button>
      </div>

      <SidebarRow Icon={ArrowRightOnRectangleIcon} title="Logout"/>
    </div>
    </div>
  )
}

export default Sidebar