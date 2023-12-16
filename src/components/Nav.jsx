import "./Nav.css";

export default function Nav() {
  return (
    <div className="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          {/* main contact link (LinkedIn and GitHub) on the page's top right */}
          <a href="https://www.linkedin.com/in/wenhao-kevin-l-6290b2145/" target="_blank">
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
  );
}
