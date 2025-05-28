import { Link } from "react-router-dom";
import { postsContext } from "../../../Contexts/PostsContext";
import { useContext } from "react";

function PostsList() {
  const posts = useContext(postsContext);

  return (
    <div className="grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {posts.map((post) => (
        <Link to={`/postDetails/${post.id}`} key={post.id}>
          <div className="w-full aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-200 ease-in-out shadow-md bg-neutral-900">
            <img
              src={post.img}
              alt={post.title}
              className="object-cover w-full h-full transition duration-200 hover:opacity-100"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
