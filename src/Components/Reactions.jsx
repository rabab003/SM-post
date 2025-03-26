import React, { useState } from 'react';
import heart from "../assets/si_heart-fill.png";
import comment from "../assets/material-symbols-light_mode-comment-outline.png";
import share from "../assets/bx_share.png" 
import save from "../assets/stash_save-ribbon-light.png" 

export default function Reactions() {
    const [like, setLike]=useState(62)
    const [isLiked, setLiked] = useState(false)

    const likeHandler = ()=> {
        setLike(isLiked ? like-1 : like+1);
        setLiked(!isLiked)
    }


  return (
    <>

    <div className='flex justify-between w-full pt-2'>
        <div className='flex gap-4'>
        <div className='flex items-center justify-center'>
            <img src={heart} onClick={likeHandler} className='cursor-pointer' alt="" />
            <p className='pl-1'>{like}</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src={comment} className='' alt="" />
            <p className='pl-1'>32</p>
        </div>
        <div className='flex items-center justify-center'>
            <img src={share} className='' alt="" />
            <p className='pl-1'>11</p>
        </div>            
        </div>

        <div>
            <img src={save} className='cursor-pointer' alt="" />
        </div>


    </div>
      
    </>
  )
}
