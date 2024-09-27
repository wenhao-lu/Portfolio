// import './Home.css';
// import '../App.css';
// import BtnDown from './BtnDown';
export default function Home() {
  return (
    <main id="mainIntro">
      <div className="introContainer">
        <div className="intro">
          {/* the intro and sections' navigation button */}
          <p className="name pl-4 text-[2rem] text-gray-100">
            Kevin - Wenhao Lu
          </p>
          <p className="introText felx border-double pl-4 text-[1rem] text-gray-100">
            Humble And Dedicated Full Stack Developer
          </p>
          <div className="resumeWrap flex flex-col items-center justify-center">
            <div className="contactLinkWrap grid w-72 grid-cols-3 items-center">
              <a
                className="resumeLink flex justify-center"
                href="../assets/files/resume.pdf"
                target="_blank"
              >
                <img
                  className="resumeLogo w-10"
                  src="assets/logo/resume.png"
                  alt="resume"
                ></img>
              </a>

              {/* show contact links on mobile devices */}
              <a
                href="https://www.linkedin.com/in/wenhao-kevin-l-6290b2145/"
                target="_blank"
                className="contactMobile flex justify-center"
              >
                <img
                  src="assets/logo/linkedin.png"
                  className="contactImg w-10"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://github.com/wenhao-lu"
                target="_blank"
                className="contactMobile flex justify-center"
              >
                <img
                  src="assets/logo/github.png"
                  className="contactImg w-10"
                  alt="github"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<BtnDown />*/}
    </main>
  );
}
