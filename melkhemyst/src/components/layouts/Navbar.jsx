import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    
    <nav className="w-full px-6 py-4 flex items-center justify-between border-b border-white/10 bg-obsidian/90 backdrop-blur">
      {/* Brand */}
      <div style={{ color: "red", padding: "10px" }}>
  NAVBAR TEST
</div>
      <Link
        to="/"
        className="text-lg font-serif tracking-wide text-white hover:text-gold transition"
      >
        Melkhemyst
      </Link>

      {/* Navigation */}
      <div className="flex items-center space-x-6 text-sm text-white/80">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-gold transition ${
              isActive ? "text-gold" : ""
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/offerings"
          className={({ isActive }) =>
            `hover:text-gold transition ${
              isActive ? "text-gold" : ""
            }`
          }
        >
          Offerings
        </NavLink>

        <NavLink
          to="/tools"
          className={({ isActive }) =>
            `hover:text-gold transition ${
              isActive ? "text-gold" : ""
            }`
          }
        >
          Tools
        </NavLink>

        <NavLink
          to="/booking"
          className={({ isActive }) =>
            `px-4 py-2 rounded border border-gold text-gold hover:bg-gold hover:text-black transition ${
              isActive ? "bg-gold text-black" : ""
            }`
          }
        >
          Book
        </NavLink>
      </div>
    </nav>
  );
}