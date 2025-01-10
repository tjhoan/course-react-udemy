import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', {
      replace: true
    });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 fixed-top">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            to="/marvel"
            className={({ isActive }) => {
              return `nav-item nav-link ${isActive ? 'text-white active' : 'text-secondary'}`;
            }}
          >
            Marvel
          </NavLink>

          <NavLink
            to="/dc"
            className={({ isActive }) => {
              return `nav-item nav-link ${isActive ? 'text-white active' : 'text-secondary'}`;
            }}
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-secondary">Jhoan</span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
