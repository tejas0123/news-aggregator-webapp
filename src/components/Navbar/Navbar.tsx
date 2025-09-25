import "./Navbar.css"

const Navbar = () => {
  return (
      <nav className="navbar">
        <a href=''><h1>Instant News</h1></a>
        <a href=''>Headlines</a>
        <a href=''>Notifications</a>
        <a href=''>Sports</a>
        <a href=''>Business</a>
        <a href=''>Tech</a>
        <button id="sign-in">Sign In</button>
      </nav>
  );
};

export default Navbar;
