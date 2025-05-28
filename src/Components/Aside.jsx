import React from 'react'
import logo from "../assets/instaLogo.png"
import { Link } from 'react-router-dom'

export default function Aside() {
  return (
    <>
    
    <div className='w-1/6 hidden md:flex md:flex-col h-screen px-5 pt-10 border-r-[1px] border-[#282828] sticky top-0 '>
      <img src={logo} className='w-32' alt="" />
      <div>
        <ul className='py-5'>
          <Link to={'/home'} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Home</li>
          </Link>
          <Link to={'/search'} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Search</li>
          </Link>
          <Link to={"/explore"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Explore</li>
          </Link>
          <Link to={"/reels"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Reels</li>
          </Link>
          <Link to={"/messages"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Messages</li>
          </Link>
          <Link to={"/notifications"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Notification</li>
          </Link>
          <Link to={"/create"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Create</li>
          </Link>
          <Link to={"/dashboard"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Dashboard</li>
          </Link>
          <Link to={"/profile"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Profile</li>
          </Link>
          <Link to={"/meta"}>
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'>Meta Ai</li>
          </Link>
          <Link to={"/home"} >
          <li className='w-full cursor-pointer hover:bg-[#282828] my-3 rounded-sm py-2 px-4'> Threads</li>
          </Link>




          {/* <li>Search</li>
          <li>Explore</li>
          <li>Reels</li>
          <li>Messages</li>
          <li>Notifications</li>
          <li>Create</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Meta AI</li>
          <li>Threads</li> */}
        </ul>
      </div>
    </div>    
    </>

  )
}
