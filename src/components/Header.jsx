import React, { useState } from "react";
import "./Header.css";
import "../App.css";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header id="header">
      {/*<img className="logo" src="assets/images/logo.png" alt="logo"></img>*/}
      <div className="linkContainer">
        <ul className="navbar">
          <li>
            <p className="nav-link nav-link-ltr">
              <a href="#projects">Projects</a>
            </p>
          </li>
          <li>
            <p className="nav-link nav-link-ltr">
              <a href="#work">Work</a>
            </p>
          </li>
          <li>
            <p className="nav-link nav-link-ltr">
              <a href="#education">Education</a>
            </p>
          </li>
          <li>
            <p className="nav-link nav-link-ltr">
              <a href="#contact">Contact</a>
            </p>
          </li>
        </ul>
      </div>

      {/* Nav section */}
      <div className="main-nav" aria-label="Main navigation">
        <ul>
          <li>
            {/* main contact link (LinkedIn and GitHub) on the page's top right */}
            <a
              href="https://www.linkedin.com/in/kevin-l-6290b2145/"
              target="_blank"
            >
              <img
                src="assets/logo/linkedin.png"
                className="contactImg"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/wenhao-lu" target="_blank">
              <img
                src="assets/logo/github.png"
                className="contactImg"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Nav menu for mobile devices */}
      <div className="mobile-menu">
        <a className="NavBtn" onClick={toggleDropdown}>
          {isDropdownVisible ? (
            <i class="fas fa-caret-square-down"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </a>

        {/* Dropdown menu */}
        {isDropdownVisible && (
          <div
            className="dropdown-menu"
            style={{
              backgroundColor: "rgb(60,70,140,0.5) ",
              position: "fixed",
              top: "3.5em",
              right: "0.5em",
            }}
          >
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
