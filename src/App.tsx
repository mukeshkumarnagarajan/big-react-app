import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";
import { AuthProvider } from "./contexts/AuthContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <HelmetProvider>
          <CartProvider>
            <Header />

            <main className="container mt-5 pt-2">
              <MainRoutes />
            </main>
          </CartProvider>
          <Footer />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
