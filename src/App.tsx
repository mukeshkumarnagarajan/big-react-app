import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage/HomePage";
import NetflixPage from "./pages/NetflixPage/NetflixPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AddUser from "./pages/UsersPage/AddUser";
import UserDetails from "./pages/UsersPage/UserDetails";
import { HelmetProvider } from "react-helmet-async";
import TodosPage from "./pages/TodosPage/TodosPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import { CartProvider } from "./contexts/CartContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <CartProvider>
          <Header></Header>

          <main className="container mt-5 pt-2">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/netflix" element={<NetflixPage />}></Route>
              <Route path="/users" element={<UsersPage />}></Route>
              <Route path="/users/add" element={<AddUser />}></Route>
              {/*  Setting up routing config with URL param */}
              <Route path="/users/:userId" element={<UserDetails />}></Route>

              <Route path="/todos" element={<TodosPage />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>
              <Route path="/about-us" element={<AboutPage />}></Route>
            </Routes>
          </main>
        </CartProvider>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
