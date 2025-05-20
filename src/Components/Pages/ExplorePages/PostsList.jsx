// import userImage from "../../../assets/man.jpg"
import { Link } from "react-router-dom"
import { postsContext } from "../../../Contexts/PostsContext"
import { useContext } from "react"

function PostsList() {
    const posts =useContext(postsContext)
    let postsList = posts.map((post)=>{
        return(
            <>
            <Link key={post.id} to={`/postDetails/${post.id}`}>
            <div className="">
                <img className="object-cover w-full h-full cursor-pointer" src={post.img} alt="" />
            </div>            
            </Link>
            </>

        )
    })
  return (
    <div className="grid grid-cols-1 gap-2 px-10 md:grid-cols-2 lg:grid-cols-4">{postsList}</div>
  )
}

export default PostsList