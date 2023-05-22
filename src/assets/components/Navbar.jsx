function Navbar() {
  return (
    <div className="navbar">
      <span>
        <img src="./src/images/Logo.png" alt="Purple Logo" id="nav-logo" />
      </span>
      <div className="items">
        <p>Home</p>
        <p>Your Lists</p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
