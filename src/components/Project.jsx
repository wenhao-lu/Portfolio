import { useState, useEffect } from "react";
import "./Project.css";
import "../App.css";


export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  // use Larevel backend API to fetch all projects info from the database
  async function fetchProjects() {
    // the URL to call my API, my online hosting was just set up, I haven't changed the domain name yet
    let response = await fetch("https://c9674390.mywhc.ca/api/projects");
    let data = await response.json();
    //console.log(data);
    setProjects(data);
  }
  
  useEffect(() => {
    fetchProjects();
  }, []);

   // Scroll up button
   const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="projectWrap" id="projects">
      <div>
        <p className="projectText">Projects</p>
      </div>

      {/* Scroll-up button */}
      <div className="scrollUpButton" onClick={scrollUp}>
      <i className="fas fa-arrow-up"></i>
      </div>

      {/* project 1 */}
      <div className="projectCont">
        <div className="projectLeft">
          <div className="pLink">
            <div className="stackWrap">
              <span className="stack1">React.JS</span>
              <span className="stack1">Node.JS</span>
              <span className="stack1">Git</span>
              <span className="stack1">Agile</span>
              <span className="stack1">Figma</span>
            </div>
          </div>

          <div className="projectIMG">
            <a href="https://welcomr---cultural-hub.glitch.me/"  target="_blank">
              <img src="assets/images/welcomr1.png"  alt="project-image" className="projectImage"/>
            </a>
          </div>
        </div>

        <div className="projectRight">
          <div className="projectLink">
            <a href="https://welcomr---cultural-hub.glitch.me/"  target="_blank">
            <i className="fas fa-globe"></i>
            </a>

            <a href="https://github.com/wenhao-lu/Cultural-Hub" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        
          <div className="pDes">
            <div className="projectName">
              <p>Cultural-Hub APP</p><p>(team project)</p>
            </div>

            <div className="projectContent1">
              <p className="projectText1">&#10095; Collaborated with UX Designers and Content Strategist to develop a three screens App</p>
              <p className="projectText2">&#10095; Solely developed the 2nd Event Listing page using React.JS, bringing designers' Figma prototype to life</p>
              <p>&#10095; Maintained mobile-friendly design principles and accessibility standards</p>
            </div>

          </div>
        </div>
      </div>
      <div className="projectHr"><hr></hr></div>

      {/* project 2 */}
      <div className="projectCont">
        <div className="projectLeft">
          <div className="pLink">
            <div className="stackWrap">
              <span className="stack1">Node.JS</span>
              <span className="stack1">npm</span>
              <span className="stack1">CLI</span>
              <span className="stack1">API</span>
              <span className="stack1">Git</span>
              <span className="stack1">Agile</span>
            </div>
          </div>

          <div className="projectIMG">
          <a href="https://www.npmjs.com/package/timesheet-automation?activeTab=versions" target="_blank">
              <img src="assets/images/time.png" alt="project-image" className="projectImage"/>
              </a>
          </div>
        </div>

        <div className="projectRight">
          <div className="projectLink">
            <a href="https://www.npmjs.com/package/timesheet-automation?activeTab=versions" target="_blank">
            <i className="fas fa-globe"></i>
            </a>

            <a href="https://github.com/wenhao-lu/TimeKeeper" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        
          <div className="pDes">
            <div className="projectName">
              <p>Timesheet Automation</p><p>(team project)</p>
            </div>

            <div className="projectContent1">
              <p className="projectText1">&#10095; Developed a CLI application using Node.js and Clockify's API</p>
              <p className="projectText2">&#10095; Contributed to CLI features, global functions, console log styling, API
debugging</p>
              <p>&#10095; Published package on NPM with 500+ downloads, allowing developers to manage time in code editor</p>
            </div>

          </div>
        </div>


      </div>
      <div className="projectHr"><hr></hr></div>

      {/* project 3 */}
      <div className="projectCont">
        <div className="projectLeft">
          <div className="pLink">
            <div className="stackWrap">
              <span className="stack1">React.JS</span>
              <span className="stack1">Node.JS</span>
              <span className="stack1">Express</span>
              <span className="stack1">MERN</span>
            </div>
          </div>

          <div className="projectIMG">
            <a href="http://movie.wlkevin.com/"  target="_blank">
              <img src="assets/images/movie.webp"  alt="project-image" className="projectImage"/>
            </a>
          </div>
        </div>

        <div className="projectRight">
          <div className="projectLink">
            <a href="http://movie.wlkevin.com/"    target="_blank">
            <i className="fas fa-globe"></i>
            </a>

            <a href="https://github.com/wenhao-lu/movie-app"  target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        
          <div className="pDes">
            <div className="projectName">
              <p>Movie App</p>
            </div>

            <div className="projectContent1">
              <p className="projectText1">&#10095; Developed a movie app using the MERN stack</p>
              <p className="projectText2">&#10095; Integrated external APIs for displaying movie information and theater locations</p>
              <p>&#10095; Implemented features for browsing latest movies, watching trailers, managing watchlist, and searching nearby theaters</p>
            </div>
          </div>
        </div>
      </div>

      {/* project 4 */}
      <div className="projectCont">
        <div className="projectLeft">
          <div className="pLink">
            <div className="stackWrap">
              <span className="stack1">Canvas</span>
              <span className="stack1">CSS</span>
              <span className="stack1">JavaScript</span>
              <span className="stack1">RESTful API</span>
            </div>
          </div>

          <div className="projectIMG">
            <a href="http://game.wlkevin.com/"  target="_blank">
              <img src="assets/images/game1.png"  alt="project-image" className="projectImage"/>
            </a>
          </div>
        </div>

        <div className="projectRight">
          <div className="projectLink">
            <a href="http://game.wlkevin.com/"   target="_blank">
            <i className="fas fa-globe"></i>
            </a>

            <a href="https://github.com/wenhao-lu/game"  target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        
          <div className="pDes">
            <div className="projectName">
              <p>HTML 2D Game</p>
            </div>

            <div className="projectContent1">
              <p className="projectText1">&#10095; Developed a 2D game using pure JavaScript, CSS and HTML</p>
              <p className="projectText2">&#10095; Implemented classic snake game mechanics with engaging anime-style UI, including music and sound effects</p>
              <p>&#10095; Integrated a REST API to store user score data on an online server and interact with the database</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectHr"><hr></hr></div>

    </div>
    
  );
}
