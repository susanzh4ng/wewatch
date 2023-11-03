import './App.css';
import LogIn from "./screens/LogIn.jsx"
import SignUp from "./screens/SignUp.jsx"
import Discover from "./screens/Discover.jsx"
import Track from "./screens/Track.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
