import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

//Lazy load some of the following components 
import NetflixPage from "../pages/NetflixPage/NetflixPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import AddUser from "../pages/UsersPage/AddUser";
import UserDetails from "../pages/UsersPage/UserDetails";
import TodosPage from "../pages/TodosPage/TodosPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminPage from "../pages/AdminPage/AdminPage";
import { ErrorBoundary } from "react-error-boundary";

const MainRoutes = () => {
  return (
    <>
    <ErrorBoundary fallback={
      <div className="alert alert-danger"> Something went wrong! Try again later.
      If the issue persits, react out admin@example.com</div>
    }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth" element={<Navigate to="/auth/login" replace />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
      </ErrorBoundary>
    </>
  );
};

export default MainRoutes;
