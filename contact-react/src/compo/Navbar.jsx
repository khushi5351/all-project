import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Contact Application</h2>
      <div className="nav-links">
        <Link to="/Contact">Contact</Link>
        <Link to="/Showcontact">Show Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/" className="logout-btn">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
