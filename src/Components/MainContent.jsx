import React from 'react'
import Post from "./Post"

export default function MainContent() {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 gap-y-8'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
