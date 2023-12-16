import "./Home.css";
import BtnDown from "./BtnDown";
export default function Home() {
  return (
    <main id="mainIntro">
      <div className="introContainer">
        <div className="intro">
          {/* the intro and sections' navigation button */}
          <p className="name">
            Kevin - Wenhao Lu 
          </p>
          <div className="resumeWrap">
            <p className="introText">Humble And Dedicated Full Stack Developer</p>
            <a className="resumeLink" href="../assets/files/resume.pdf" target="_blank">
              <img 
                className="resumeLogo" 
                src="assets/logo/resume.png" 
                alt="resume">
              </img>
            </a>
          </div>
          
        </div>
        
      </div>
      <BtnDown/>
    </main>
  );
}
