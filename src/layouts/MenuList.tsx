import { NavLink } from "react-router-dom";

const MenuList = () => {
  const navLinkClass = (navData: any) => navData.isActive ? "active nav-link" : "nav-link";

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className={navLinkClass} to="/">
          Home
        </NavLink>
      </li>

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

      <li className="nav-item">
        <NavLink className={navLinkClass} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
