import { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

const URL = "https://ic-directory-server.onrender.com/";

const Login = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    setIsLoading(true);

    fetch(`${URL}auth/login/local`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.data.user));
        setUser(result.data.user);
        navigate("../admin");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const redirectNote = `Don't have an account?`;

  return (
    <div>
      <main className="main-container">
        <section className="">
          <div className="">
            <h1>Login</h1>
            <form onSubmit={handleLoginFormSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="form-group">
                <button type="submit" disabled={isLoading}>
                  {" "}
                  {isLoading ? "Logging in..." : "Login"}
                </button>
              </div>
              {error && <p>There is an error: {error}</p>}
            </form>
            {redirectNote} <Link to="/register">Register</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

Login.propTypes ={
  setUser: PropTypes.func.isRequired,
}

export default Login;
