import './App.css';
import LogIn from "./screens/LogIn.jsx"
import SignUp from "./screens/SignUp.jsx"
import Discover from "./screens/Discover.jsx"
import Track from "./screens/Track.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
(1.) Create Screens, Components, and Assets folder in src
() Import all of your screens into App.js
(3.) Set up React Router (npm i react-router-dom) (import { BrowserRouter as Router, Routes, Route } from "react-router-dom";)
() Install phosphor-react (icon family)
() Explain Components & props
() Start Movie Component
() Start Coding SignUp screen
() NavBar component
*/

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
