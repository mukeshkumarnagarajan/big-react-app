import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface NavLinkData {
  isActive: boolean;
  // Add other properties if needed
}

const MenuList = () => {
  const navLinkClass = (navData: NavLinkData): string =>
    navData.isActive ? "active nav-link" : "nav-link";

  const { logout, isAuthenticated, role } = useAuth();
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={navLinkClass} to="/about-us">
          About
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={navLinkClass} to="contact-us">
          Contact Us
        </NavLink>
      </li>

      {!isAuthenticated ? (
        <li className="nav-item">
          <NavLink className={navLinkClass} to="/auth/login">
            Login
          </NavLink>
        </li>
      ) : (
        <>
          <li className="nav-item">
            <NavLink className={navLinkClass} to="/netflix">
              Netflix
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className={navLinkClass} to="/users">
              Manage Users
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className={navLinkClass} to="/todos">
              Todos
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className={navLinkClass} to="/products">
              Products
            </NavLink>
          </li>

          {role === "SUPER_ADMIN" ? (
            <>
              <li className="nav-item">
                <NavLink className={navLinkClass} to="/admin">
                  Admin
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}

          <li className="nav-item">
            <button
              className="btn btn-info"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          </li>
        </>
      )}
    </ul>
  );
};

export default MenuList;
