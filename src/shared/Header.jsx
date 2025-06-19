import { Link } from "react-router-dom";

function Header() {
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
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
