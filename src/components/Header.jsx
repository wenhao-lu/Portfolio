import "./Header.css";
import "../App.css";
import Nav from "./Nav";


export default function Header() {


  return (
    <header id="header" >
      <img className="logo" src="assets/images/logo.png" alt="logo"></img>
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
      <div>
        <Nav/>
      </div>
      
    </header>
  );
}
