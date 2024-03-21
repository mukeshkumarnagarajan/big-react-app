import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HomePage from "./pages/HomePage/HomePage";
import NetflixPage from "./pages/NetflixPage/NetflixPage";

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <main className="container mt-5 pt-2">
        <HomePage />
        <NetflixPage />
      </main>

      <Footer />
    </div>
  );
};

export default App;
