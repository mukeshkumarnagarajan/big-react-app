import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>

      <main className="container mt-5 pt-2">
        <h1>Success!!</h1>
      </main>

      <Footer />
    </div>
  );
};

export default App;
