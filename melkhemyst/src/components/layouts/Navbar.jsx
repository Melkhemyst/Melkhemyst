import { Link, NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

export default function Navbar() {
  return (
    <header id="site-nav">
      <div className="nav-inner">

        {/* Brand */}
        <Link to="/" className="nav-brand">
          Melkhemyst
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/offerings">Offerings</NavLink>
          <NavLink to="/tools">Tools</NavLink>
          <NavLink to="/booking" className="cta">
            Book
          </NavLink>
        </nav>

      </div>
    </header>
  );
}