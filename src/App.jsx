import Aside from "./Components/Aside";
import MainContent from "./Components/MainContent";
import { Route, Routes } from 'react-router-dom';
import Explore from "./Components/Pages/ExplorePages/Explore"
import Search from "./Components/Pages/Search"
import Create from "./Components/Pages/Create"
import Dashboard from "./Components/Pages/Dashboard"
import Messages from "./Components/Pages/Messages"
import Notifications from "./Components/Pages/Notifications"
import Profile from "./Components/Pages/Profile"
import Reels from "./Components/Pages/Reels"
import NotFound from "./Components/Pages/NotFound";
import PostDetails from "./Components/Pages/ExplorePages/PostDetails";
import { postsContext } from "./Contexts/PostsContext";
import userImage from "./assets/man.jpg"



function App() {
  let postsData = [
    {
        id:1,
        title:"post 1",
        userName:"user 1",
        text:"lorem",
        img: userImage,
    },
    {
        id:2,
        title:"post 2",
        userName:"user 2",
        text:"lorem",
        img: userImage,
    },
    {
        id:3,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: userImage,
    }, 
]
  return (
    <>
    <postsContext.Provider value={postsData}>
    <div className="bg-[#0B0B0B] text-white min-h-screen flex">
        
        <Aside/>
    
    
    <Routes>
      <Route path="/" element={<MainContent/>}/>
      <Route path="/home" element={<MainContent/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/notifications" element={<Notifications/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/reels" element={<Reels/>}/>
      <Route path="/postDetails/:postId" element={<PostDetails/>}/>
      <Route path="*" element={<NotFound/>}/>

    </Routes>    
    </div>      
    </postsContext.Provider>
    </>



  );
}

export default App;