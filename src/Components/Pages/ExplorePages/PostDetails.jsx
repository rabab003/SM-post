import { Link, useParams } from 'react-router-dom'
import { useContext, useState } from 'react';
import { postsContext } from '../../../Contexts/PostsContext';
import { XMarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import img from "../../../assets/Feed/1 (3).jpg"
import emoji from "../../../assets/emoji.png"
import Reactions from '../../Reactions';
import NotFound from '../NotFound';
import { FaClover } from "react-icons/fa6";

function PostDetails() {

    const [comments, setComments] =useState([
    { id: 1, user: '@gre9876', text: 'Nice post!', like: 13, isLiked: false  },
    { id: 2, user: '@ilo8732324', text: 'Great content!', like : 71 , isLiked: false }      
    ])
    const [newComment, setNewComment ] = useState("")

const likeHandler = (commentId) => {
        setComments(comments.map(comment => {
            if (comment.id === commentId) {
                return {
                    ...comment,
                    like: comment.isLiked ? comment.like - 1 : comment.like + 1,
                    isLiked: !comment.isLiked
                };
            }
            return comment;
        }));
    };
         
    const { postId } = useParams();
    const posts = useContext(postsContext);
    const post = posts.find((p) => p.id == postId);

    if (!post) {
        return <NotFound />;
    }
    
   const handleAddComment = (e) => {
        e.preventDefault(); // Prevent default form behavior
        if (newComment.trim()) {
            const newCommentObj = {
                id: Date.now(),
                user: 'current_user',
                text: newComment,
                like:0
            };
            setComments(prevComments => [...prevComments, newCommentObj]);
            setNewComment('');
        }
    };

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
                    {/* ... (header ) ... */}
                             <div className='sticky top-0 z-10 bg-[#111111] p-4 border-b border-[#2d2d2d] flex justify-between items-center'>
                                  <div className='flex items-center'>
                                        <img className='object-cover w-10 h-10 mr-3 rounded-full' src={img} alt="User profile" />
                                         <span className='font-semibold'>{post.userName || "user_name"}</span>
                                   </div>
                                    <button className='p-1'>
                                        <EllipsisHorizontalIcon className='w-6 h-6' />
                                   </button>
                              </div>
                    {/* Scrollable Content */}
                    <div className='flex-1 p-4 overflow-y-auto'>

 
                        {/* Comments Section */}
                        <div className='space-y-4'>
                            {comments.map(comment => (
                                <div key={comment.id} className='flex items-center justify-between'>
                                    <div className='flex items-start'>

                                    <img src={img} className='w-8 h-8 mr-3 rounded-full' alt="" />
                                    <div>
                                        <p className='font-semibold'>{comment.user}</p>
                                        <p>{comment.text}</p>
                                    </div>
                                    </div>
                                     {/* like btn */}
                                    <div className='flex flex-col items-center'>
                                         <button 
                                             onClick={() => likeHandler(comment.id)}
                                             className={`${comment.isLiked ? "text-[#4bcf5b]": " text-[#90A792]"}`}
                                             >
                                           <FaClover className='text-xl' />
                                           </button>
                                      <p className='text-[10px] text-[#797979]'>{comment.like}</p> 

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sticky Footer */}
                    <div className='sticky bottom-0 bg-[#111111] border-t border-[#2d2d2d] p-4'>
                                {/* Reactions Component */}
                                  <div className='mb-4'>
                                      <Reactions />
                                  </div>
                        {/* ... (post caption remains the same) ... */}

                         <div className='mb-6'>
                                <div className='flex items-start'>
                                    <span className='mr-2 font-semibold'>{post.userName || "user_name"}</span>
                                    <p>lorem</p>
                                </div>
                                <p className='text-sm text-[#505050] mt-1'>
                                    {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </p>
                        </div>
                        {/* Add Comment - Wrapped in form */}
                        <form onSubmit={handleAddComment} className='flex items-center justify-between'>
                            <div className='flex items-center flex-1 mr-2'>
                                <img 
                                    src={emoji} 
                                    className='w-6 h-6 mr-2 cursor-pointer' 
                                    alt="Emoji picker" 
                                />
                                <input 
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className='flex-1 text-sm bg-transparent border-none outline-none' 
                                    type="text" 
                                    placeholder='Add a comment...' 
                                    required
                                />
                            </div>
                            <button 
                                type="submit"
                                className={`text-sm font-semibold ${newComment.trim() ? 'text-blue-500 hover:text-blue-400' : 'text-gray-500 cursor-not-allowed'}`}
                                disabled={!newComment.trim()}
                            >
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostDetails;

// import { Link, useParams } from 'react-router-dom';
// import { useContext, useState } from 'react';
// import { postsContext } from '../../../Contexts/PostsContext';
// import { XMarkIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
// import img from "../../../assets/Feed/1 (3).jpg";
// import emoji from "../../../assets/emoji.png";
// import Reactions from '../../Reactions';
// import NotFound from '../NotFound';

// function PostDetails() {
//     const [comments, setComments] = useState([
//         { id: 1, user: '@gre9876', text: 'Nice post!' },
//         { id: 2, user: '@ilo8732324', text: 'Great content!' }      
//     ]);
//     const [newComment, setNewComment] = useState("");

//     const { postId } = useParams();
//     const posts = useContext(postsContext);
//     const post = posts.find((p) => p.id == postId);

//     if (!post) {
//         return <NotFound />;
//     }

//     const handleAddComment = (e) => {
//         e.preventDefault(); // Prevent default form behavior
//         if (newComment.trim()) {
//             const newCommentObj = {
//                 id: Date.now(),
//                 user: 'current_user',
//                 text: newComment
//             };
//             setComments(prevComments => [...prevComments, newCommentObj]);
//             setNewComment('');
//         }
//     };

//     return (
//         <div className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70'>
//             <div className='bg-[#111111] rounded-lg w-full max-w-5xl h-[90vh] flex flex-col lg:flex-row overflow-hidden'>
//                 {/* ... (other parts remain the same) ... */}

//                 {/* Content Section */}
//                 <div className='flex flex-col h-full lg:w-1/2'>
//                     {/* ... (header remains the same) ... */}

//                     {/* Scrollable Content */}
//                     <div className='flex-1 p-4 overflow-y-auto'>
//                         {/* ... (post caption remains the same) ... */}

//                         {/* Comments Section */}
//                         <div className='space-y-4'>
//                             {comments.map(comment => (
//                                 <div key={comment.id} className='flex items-start'>
//                                     <img src={img} className='w-8 h-8 mr-3 rounded-full' alt="" />
//                                     <div>
//                                         <p className='font-semibold'>{comment.user}</p>
//                                         <p>{comment.text}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Sticky Footer */}
//                     <div className='sticky bottom-0 bg-[#111111] border-t border-[#2d2d2d] p-4'>
//                         {/* ... (reactions remain the same) ... */}

//                         {/* Add Comment - Wrapped in form */}
//                         <form onSubmit={handleAddComment} className='flex items-center justify-between'>
//                             <div className='flex items-center flex-1 mr-2'>
//                                 <img 
//                                     src={emoji} 
//                                     className='w-6 h-6 mr-2 cursor-pointer' 
//                                     alt="Emoji picker" 
//                                 />
//                                 <input 
//                                     value={newComment}
//                                     onChange={(e) => setNewComment(e.target.value)}
//                                     className='flex-1 text-sm bg-transparent border-none outline-none' 
//                                     type="text" 
//                                     placeholder='Add a comment...' 
//                                     required
//                                 />
//                             </div>
//                             <button 
//                                 type="submit"
//                                 className={`text-sm font-semibold ${newComment.trim() ? 'text-blue-500 hover:text-blue-400' : 'text-gray-500 cursor-not-allowed'}`}
//                                 disabled={!newComment.trim()}
//                             >
//                                 Post
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PostDetails;