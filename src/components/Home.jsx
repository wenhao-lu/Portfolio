import './Home.css';
import '../App.css';
import BtnDown from './BtnDown';
export default function Home() {
  return (
    <main id="mainIntro">
      <div className="introContainer">
        <div className="intro">
          {/* the intro and sections' navigation button */}
          <p className="name">Kevin - Wenhao Lu</p>
          <div className="resumeWrap">
            <p className="introText felx border-double text-lg italic text-green-300">
              Humble And Dedicated Full Stack Developer
            </p>
            <div className="contactLinkWrap">
              <a
                className="resumeLink"
                href="../assets/files/resume.pdf"
                target="_blank"
              >
                <img
                  className="resumeLogo"
                  src="assets/logo/resume.png"
                  alt="resume"
                ></img>
              </a>

              {/* show contact links on mobile devices */}
              <a
                href="https://www.linkedin.com/in/wenhao-kevin-l-6290b2145/"
                target="_blank"
                className="contactMobile"
              >
                <img
                  src="assets/logo/linkedin.png"
                  className="contactImg"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/wenhao-lu"
                target="_blank"
                className="contactMobile"
              >
                <img
                  src="assets/logo/github.png"
                  className="contactImg"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <BtnDown />
    </main>
  );
}
