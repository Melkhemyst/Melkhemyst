import { Link } from "react-router-dom";
import MelkhemystLogo from "../../images/MelkhemystLogo.png";

export default function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-inner">

        {/* Sigil */}
        <div className="footer-sigil">
          <img
            src={MelkhemystLogo}
            alt="Melkhemyst sigil"
          />
        </div>

        {/* Brand Statement */}
        <p className="footer-statement">
          Melkhemyst is an intuitive, energetic practice offering soul-level
          guidance, emotional clarity, and grounded transformation.
        </p>

        {/* Navigation */}
        <nav className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/offerings">Offerings</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/legal">Legal</Link>
        </nav>

        {/* Disclaimer */}
        <p className="footer-disclaimer">
          This website offers intuitive and spiritual services.
          It does not provide medical, psychological, or legal advice.
          Sessions are not a substitute for professional care.
        </p>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Melkhemyst. All rights reserved.
        </p>

      </div>
    </footer>
  );
}