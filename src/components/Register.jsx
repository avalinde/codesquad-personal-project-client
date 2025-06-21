import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const URL = "https://ic-directory-server.onrender.com/";

const Register = ({ setUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      username: e.target.username.value,
      password: e.target.password.value,
    };

    setIsLoading(true);

    fetch(`${URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
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

  const redirectNote = `Already have an account?`;

  return (
    <div>
      <main className="main-container">
        <section className="">
          <div className="form-container">
            <h1>Register</h1>

            <form className="form-f" onSubmit={handleSignupFormSubmit}>
              <div className="form-p">
                <label className="form-l" htmlFor="firstname">First Name: </label>
                <input type="text" id="firstname" name="firstname" required />
              </div>

              <div className="form-p">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" id="lastname" name="lastname" required />
              </div>

              <div className="form-p">
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" required />
              </div>

              <div className="form-p">
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" required />
              </div>

              <div className="text-center">
                <button type="submit">
                  {isLoading ? "Registering new User..." : "Register"}
                </button>
              </div>
              {error && <p>There is an error: {error}</p>}
            </form>
            <p className="redirect-text">
              {redirectNote} <Link to="/login">Login</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

Register.propTypes ={
  setUser: PropTypes.func.isRequired,
}

export default Register;
