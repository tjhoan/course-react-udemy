import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg rounded-3" style={{ backgroundColor: "#505050" }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          useContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return `nav-link ${isActive ? "text-white active" : "text-secondary"}`;
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return `nav-link ${isActive ? "text-white active" : "text-secondary"}`;
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return `nav-link ${isActive ? "text-white active" : "text-secondary"}`;
              }}
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
