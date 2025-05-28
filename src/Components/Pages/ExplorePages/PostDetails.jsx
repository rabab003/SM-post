// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { useContext } from 'react';
// import { postsContext } from '../../../Contexts/PostsContext';
// import PostContent from '../../PostContent';
// import NotFound from '../NotFound';
// import img from "../../../assets/Feed/1 (3).jpg"
// import emoji from "../../../assets/emoji.png"
// import Reactions from '../../Reactions';

// function PostDetails() {
//     const {postId} = useParams();

//     const posts =useContext(postsContext)

//     const post = posts.find((p)=>{
//         return p.id == postId
//     })
//     console.log(postId)
//         if(post){
//           return (
//     <div className='items-center justify-center px-7 lg:flex'>

//     <div className='lg:w-[50%] object-fit h-3/4'>
//         <img className='w-[100%]' src={post.img}/>

//     </div>
//     <div className='px-7 lg:w-[50%] bg-[#111111] h-3/4'>       

//         {/* the close tap */}


//         {/* the card info */}

//         <div className='flex flex-col justify-between'>
//         {/* the top info */}
//         <div className='flex items-center justify-between pb-2'>
//             <div className='flex items-center justify-center'>
//             <img className='object-cover w-10 h-10 mr-3 rounded-full' src={img} alt="" />
//             <p>user_name</p>                
//             </div>

//             <i className='text-2xl'>...</i>
//         </div>
//         <hr className='text-[#2d2d2d]'/>




//          <div>
//         <div className='pb-4'>
//             <Reactions />
//             <h2 className='pt-1.5 font-light'>liked by <span className='font-bold'>userName_ui</span>  and <span className='font-bold'>239 others</span></h2>
//             <p className='text-sm text-[#505050]'>May 14</p>

//         </div>
//         <hr className='text-[#2d2d2d] '/>
//          {/* add comment section */}
//         <div className='flex justify-between w-full pt-1.5'>
            
//             <div className='flex'>
//             <img src={emoji} className='cursor-pointer' />
//             <input className='pl-3 outline-none' type="text" placeholder='add comment' />
//             </div>

//             <button className='text-blue-900 cursor-pointer hover:text-blue-700'>post</button>

//         </div>            
//          </div>


//         </div>
//     </div>
//    </div>


//   ) 
//         }else{
//             return(
//                 <>
//                 <NotFound/>
                
//                 </>
//             )
//         }



//     }
// export default PostDetails


//         // <div>
//         // <Link to={'/explore'}>
//         // <p>x</p>
//         // </Link>            
//         // </div>

//         {/* <h2>{post.title}</h2>
//         <h2>{post.userName}</h2>
//         <h2>{post.text}</h2>*/}
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import { XMarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import img from "../../../assets/Feed/1 (3).jpg"
import emoji from "../../../assets/emoji.png"
import Reactions from '../../Reactions';
import NotFound from '../NotFound';

function PostDetails() {
    const { postId } = useParams();
    const posts = useContext(postsContext);
    const post = posts.find((p) => p.id == postId);

    if (!post) {
        return <NotFound />;
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70'>
            {/* Main Content Container */}
            <div className='bg-[#111111] rounded-lg w-full max-w-5xl h-[90vh] flex flex-col lg:flex-row overflow-hidden'>
                {/* Close Button - Top Left */}
                <Link 
                    to="/explore" 
                    className='absolute z-50 p-2 transition-colors rounded-full top-6 left-6 bg-black/50 hover:bg-black/70 md:left-auto md:right-6'
                >
                    <XMarkIcon className='w-6 h-6 text-white' />
                </Link>

                {/* Image Section */}
                <div className='flex items-center justify-center h-full bg-black lg:w-1/2'>
                    <img 
                        className='object-contain max-w-full max-h-full' 
                        src={post.img} 
                        alt={post.title} 
                    />
                </div>

                {/* Content Section */}
                <div className='flex flex-col h-full lg:w-1/2'>
                    {/* Sticky Header */}
                    <div className='sticky top-0 z-10 bg-[#111111] p-4 border-b border-[#2d2d2d] flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img 
                                className='object-cover w-10 h-10 mr-3 rounded-full' 
                                src={img} 
                                alt="User profile" 
                            />
                            <span className='font-semibold'>{post.userName || "user_name"}</span>
                        </div>
                        <button className='p-1'>
                            <EllipsisHorizontalIcon className='w-6 h-6' />
                        </button>
                    </div>

                    {/* Scrollable Content */}
                    <div className='flex-1 p-4 overflow-y-auto'>
                        {/* Post Caption */}
                        <div className='mb-6'>
                            <div className='flex items-start'>
                                <span className='mr-2 font-semibold'>{post.userName || "user_name"}</span>
                                <p>{post.text || "No caption provided"}</p>
                            </div>
                            <p className='text-sm text-[#505050] mt-1'>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        </div>

                        {/* Comments Section */}
                        <div className='space-y-6'>
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className='flex items-start'>
                                    <img 
                                        className='object-cover w-8 h-8 mr-3 rounded-full' 
                                        src={img} 
                                        alt={`Commenter ${i}`} 
                                    />
                                    <div>
                                        <p className='font-semibold'>commenter_{i}</p>
                                        <p>This is a sample comment #{i+1} on this post</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sticky Footer */}
                    <div className='sticky bottom-0 bg-[#111111] border-t border-[#2d2d2d] p-4'>
                        <div className='mb-3'>
                            <Reactions />
                            <p className='pt-1.5 font-light'>
                                Liked by <span className='font-bold'>userName_ui</span> and <span className='font-bold'>239 others</span>
                            </p>
                        </div>

                        {/* Add Comment */}
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center flex-1 mr-2'>
                                <img 
                                    src={emoji} 
                                    className='w-6 h-6 mr-2 cursor-pointer' 
                                    alt="Emoji picker" 
                                />
                                <input 
                                    className='flex-1 text-sm bg-transparent border-none outline-none' 
                                    type="text" 
                                    placeholder='Add a comment...' 
                                />
                            </div>
                            <button className='text-sm font-semibold text-blue-500 hover:text-blue-400 disabled:opacity-50' disabled>
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;