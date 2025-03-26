import React from 'react';
import userImage from "../assets/man.jpg"

export default function TopContent() {
  return (
    <>
    <div className='flex justify-between'>
    <div className='flex items-center'>
        <img src={userImage} className='w-12 h-12 cursor-pointer  rounded-full object-cover' alt="" />
        <h1 className='pl-3 cursor-pointer'>Username_here</h1>
    </div>
    <div>
        <i className='text-3xl cursor-pointer'>...</i>
    </div>        
    </div>

      
    </>
  )
}
