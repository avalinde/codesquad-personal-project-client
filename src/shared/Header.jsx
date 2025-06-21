import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();
  const URL = "https://ic-directory-server.onrender.com/";

  const handleLogout = () => {
    fetch(`${URL}auth/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        localStorage.removeItem("user");
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        console.log("error :>> ", error);
        navigate("/admin");
      });
  };

  return (
    <div>
      <header>
        <nav>
          <div className="menu-toggle" id="menu-toggle">
            <a href="#" className="hamburger">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>
          <ul id="nav-list">
            <li>
              <Link to={"../"}>Home</Link>
            </li>
            <li>
              <Link to={"../directory"}>Directory</Link>
            </li>
            <li>
              <Link to={"../about"}>About</Link>
            </li>
            <li>
              <Link to={"../contact"}>Contact</Link>
            </li>
            {user.username ? (
              <>
                <li>
                  <Link to="../admin">Admin</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li>
                <Link to="../login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default Header;
