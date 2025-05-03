import React from 'react'
import Post from "./Post"

export default function MainContent() {
  return (
    <div className='grid gap-6'>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
