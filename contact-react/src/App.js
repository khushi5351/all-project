import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './compo/Navbar.jsx';
import Register from './compo/Register.jsx';
import Login from './compo/Login.jsx';
import About from './compo/About.jsx';
import Contact from './compo/Contact.jsx';
import Showcontact from './compo/Showcontact.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<><Navbar /><About /> </>} />
          <Route path="/Contact" element={<><Navbar /><Contact /></>} />
          <Route path="/Showcontact" element={<><Navbar /><Showcontact /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
