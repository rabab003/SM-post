import Aside from "./Components/Aside";
import MainContent from "./Components/MainContent";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-[#0B0B0B] text-white min-h-screen flex">
        <Aside />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;