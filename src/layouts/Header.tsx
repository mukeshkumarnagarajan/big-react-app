import { Link } from "react-router-dom";
import MenuList from "./MenuList";
import { useCart } from "../contexts/CartContext";

const Header: React.FC = () => {

  const addToCartContext = useCart();

  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Big React App!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
          <button className="btn btn-danger">Cart({addToCartContext?.cartItems.length})</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
