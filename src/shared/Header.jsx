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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Directory</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
