import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import PostContent from '../../PostContent';
import NotFound from '../NotFound';

function PostDetails() {
    const {postId} = useParams();

    const posts =useContext(postsContext)

    const post = posts.find((p)=>{
        return p.id == postId
    })


    console.log(postId)

        if(post){
        
            return (

    <>
    <div>
        <Link to={'/explore'}>
        <p>x</p>
        </Link>
        <h2>{post.title}</h2>
        <h2>{post.userName}</h2>
        <h2>{post.text}</h2>
        <img src={post.img}/>
    </div>
   </>


  ) 
        }else{
            return(
                <>
                <NotFound/>
                
                </>
            )
        }


}

export default PostDetails