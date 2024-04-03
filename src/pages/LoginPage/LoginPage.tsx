import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface IFormLogin {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const { register, handleSubmit, formState } = useForm<IFormLogin>();

  const navigate = useNavigate();
  const authContext = useAuth();

  const handleLogin: SubmitHandler<IFormLogin> = async (formData) => {

    try {
      const response = await axios.post(
        "https://reqres.in/api/login",
        formData
      );
      authContext.saveToken(response.data.token);
      navigate("/netflix");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-4 offset-md-4">
      <br />

      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email")}
            disabled={formState.isSubmitting}
            defaultValue="eve.holt@reqres.in"
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
            disabled={formState.isSubmitting}
            defaultValue="cityslicka#423wsdf234"
          />
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary mt-3"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
