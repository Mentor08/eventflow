import { useState } from "react";
import "./Navbar.css"; // Stylesheet for Navbar
import Bell from "../../assets/images/Vectorbell.png";
import arrowDown from "../../assets/images/arrow-down.png";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the navbar on small screens
  const [isDropDownOpen, setIsDropDownOpen] = useState(false); // State for toggling dropdown

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const { pagename, home, event, calendar, explore } = props;
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="navbar-logo-initial">E</span>
          <span className="navbar-logo-rare">Eventflow</span>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li onClick={home}>
              <a className={pagename == "home" ? "current" : ""} href="#">
                Home
              </a>
            </li>
            <li onClick={event}>
              <a className={pagename == "myevent" ? "current" : ""} href="#">
                My Events
              </a>
            </li>
            <li onClick={calendar}>
              <a className={pagename == "calendar" ? "current" : ""} href="#">
                Calendar
              </a>
            </li>
            <li onClick={explore}>
              <a className={pagename == "explore" ? "current" : ""} href="#">
                Explore
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className="notification">
            <img
              src={Bell}
              alt="notification bell"
              className="notification-icon"
            />
          </div>
          <div className="user-dropdown">
            <div className="username-initial">SD</div>
            <div onClick={toggleDropDown}>
              <span className="username">Samuel Daniel</span>
              <span className="dropdown-icon">
                <img src={arrowDown} alt="arrow down" />
              </span>
              {/* Dropdown content */}
              <div
                className={
                  isDropDownOpen
                    ? "dropdown-content active"
                    : "dropdown-content"
                }
              >
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="toggle-icon">{isOpen ? "✖" : "☰"}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
