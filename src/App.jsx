import Aside from "./Components/Aside";
import MainContent from "./Components/MainContent";
import { Route, Routes } from 'react-router-dom';
import Explore from "./Components/Pages/Explore"
import Search from "./Components/Pages/Search"
import Create from "./Components/Pages/Create"
import Dashboard from "./Components/Pages/Dashboard"
import Messages from "./Components/Pages/Messages"
import Notifications from "./Components/Pages/Notifications"
import Profile from "./Components/Pages/Profile"
import Reels from "./Components/Pages/Reels"



function App() {
  return (
    <>
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

    </Routes>    

      </div>

  
    </>



  );
}

export default App;