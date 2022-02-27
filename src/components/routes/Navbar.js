import { Link } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const { token, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark py-2 fixed-top">
      <div className="container-md">
        <Link className="navbar-brand" to="/">
          <img className="resize" src={logo} alt="Brand logo" />
        </Link>

        {/* Hamburguer Button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-end">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu-items">
                Menu Items
              </Link>
            </li>
            <li className="nav-item">
              {token && (
                <div className="nav-link" onClick={logout}>
                  Log out
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
