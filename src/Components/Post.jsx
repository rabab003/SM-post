import React from 'react'
import TopContent from './TopContent';
import Image from './Image';
import Reactions from './Reactions';
import PostContent from './PostContent';

export default function Post() {
  return (
    <div className='text-white bg-[#141414] flex flex-col items-center justify-center w-[500px] py-8 px-5 rounded-b-sm'>
        <TopContent/>
        <Image/>
        <Reactions/>
        <PostContent/>

      
    </div>
  )
}
