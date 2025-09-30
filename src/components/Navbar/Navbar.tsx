import { Link } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user } = useAuth();

  const standardNavbar = (
    <nav className="navbar">
      <Link to="/">
        <h1>Instant News</h1>
      </Link>
      <a href="">Headlines</a>
      <a href="">Sports</a>
      <a href="">Business</a>
      <a href="">Tech</a>
      <Link to="/login">Sign In</Link>
    </nav>
  );

  const adminNavbar = (
    <nav className="navbar">
      <Link to="/">
        <h1>Instant News</h1>
      </Link>
      <Link to="/servers">Servers</Link>
      <Link to="/">Topics</Link>
      <Link to="/">Logout</Link>
    </nav>
  );

  const userNavbar = (
    <nav className="navbar">
      <Link to="/">
        <h1>Instant News</h1>
      </Link>
      <Link to="/">Saved Articles</Link>
      <Link to="/">Notifications</Link>
      <Link to="/">Preferences</Link>
      <Link to="/">Logout</Link>
    </nav>
  );

  if (!user) {
    return standardNavbar;
  } else if (user && user.email === 'tejasrc27@gmail.com') {
    return adminNavbar;
  } else {
    return userNavbar;
  }
};

export default Navbar;
