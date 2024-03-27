import { NavLink } from "react-router-dom";

const MenuList = () => {
  const name = (navData: any) =>
    navData.isActive ? "active nav-link" : "nav-link";
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className={name} to="/">
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/netflix">
          Netflix
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/users">
          Manage Users
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/todos">
          Todos
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/products">
          Products
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/about-us">
          About
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="contact-us">
          Contact Us
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className={name} to="/login">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
