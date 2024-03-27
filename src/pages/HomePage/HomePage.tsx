import { Helmet } from "react-helmet-async";
import homeLogo from "../../assets/images/logo-homepage.png";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Helmet>
        <title>Home</title>
      </Helmet>

      <img
        src={homeLogo}
        alt="homepage-logo"
        style={{ width: "400px", height: "200px" }}
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        My Big React App!
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
          reiciendis alias quisquam quasi tempore modi eveniet quae illum,
          facilis adipisci voluptate cum nesciunt ab sit perspiciatis cupiditate
          amet saepe hic!
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={() => {
              navigate("/netflix");
            }}
          >
            Browse Netflix
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
            onClick={() => {
              navigate("/users");
            }}
          >
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
