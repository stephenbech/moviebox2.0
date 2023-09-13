import React from 'react'
import {Image }from './Images'

function SidebarRow({src, Icon, title }) {
  return (
    <div className='flex items-center space-x-2 p-4 hover:bg-rose-50 hover:border-rose-700 hover:border-r-4 cursor-pointer  ' >
      {src && (
            <Image 
               className='hidden sm:inline-flex'
               path={src}
               width={30}
               height={30}
               layout="fixed"
               alt='userImage'
            />
      )}
      {Icon && (
            <Icon className="h-8 w-8 text-gray-400"/>
      )}
      <p className='hidden sm:inline-flex text-gray-500 font-semibold' >{title}</p>
    </div>
  )
}

export default SidebarRow