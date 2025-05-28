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
import img1 from "./assets/Feed/1 (1).jpg"
import img2 from "./assets/Feed/1 (2).jpg"
import img3 from "./assets/Feed/1 (3).jpg"
import img4 from "./assets/Feed/1 (4).jpg"
import img5 from "./assets/Feed/1 (5).jpg"
import img6 from "./assets/Feed/1 (6).jpg"
import img7 from "./assets/Feed/1 (7).jpg"
import img8 from "./assets/Feed/2 (1).jpg"
import img9 from "./assets/Feed/2 (1).jpg"
import img10 from "./assets/Feed/2 (1).jpg"
import img11 from "./assets/Feed/2 (2).jpg"
import img12 from "./assets/Feed/2 (3).jpg"
import img13 from "./assets/Feed/2 (4).jpg"
import img14 from "./assets/Feed/2 (5).jpg"
import img15 from "./assets/Feed/2 (6).jpg"
import img16 from "./assets/Feed/2 (7).jpg"
import img17 from "./assets/Feed/2 (8).jpg"
import img18 from "./assets/Feed/2 (9).jpg"
import img19 from "./assets/Feed/2 (10).jpg"

function App() {
  let postsData = [
    {
        id:1,
        title:"post 1",
        userName:"user 1",
        text:"lorem",
        img: img1,
    },
    {
        id:2,
        title:"post 2",
        userName:"user 2",
        text:"lorem",
        img: img2,
    },
    {
        id:3,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img3,
    }, 
    {
        id:4,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img4,
    }, 
    {
        id:5,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img5,
    }, 
    {
        id:6,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img6,
    }, 
    {
        id:7,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img7,
    }, 
    {
        id:8,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img8,
    }, 
    {
        id:9,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img9,
    }, 
    {
        id:10,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img10,
    }, 
    {
        id:11,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img11,
    }, 
    {
        id:12,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img12,
    }, 
    {
        id:13,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img13,
    }, 
    {
        id:14,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img14,
    }, 
    {
        id:15,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img15,
    }, 
    {
        id:16,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img16,
    }, 
    {
        id:17,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img17,
    }, 
    {
        id:18,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img18,
    }, 
    {
        id:19,
        title:"post 3",
        userName:"user 3",
        text:"lorem",
        img: img19,
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

