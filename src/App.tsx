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

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <HelmetProvider>
      <Header></Header>

      <main className="container mt-5 pt-2">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/netflix" element={<NetflixPage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/1" element={<UserDetails />}></Route>
          <Route path="/about-us" element={<AboutPage />}></Route>
        </Routes>
      </main>

      <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
