import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Instant News</h1>
      </Link>
      <a href="">Headlines</a>
      <a href="">Notifications</a>
      <a href="">Sports</a>
      <a href="">Business</a>
      <a href="">Tech</a>
      <Link to="/login">Sign In</Link>
    </nav>
  );
};

export default Navbar;
