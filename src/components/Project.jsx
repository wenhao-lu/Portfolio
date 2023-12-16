import { useState, useEffect } from "react";

import "./Project.css";
import "../App.css";

import img1 from "../assets/images/time.png";


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

  const myImages = [img1];

  return (
    <div className="projectWrap" id="projects">
      <div>
        <p className="projectText">Projects</p>
      </div>


{/* project 1 */}
<div className="projectContainer">
    <div className="projectCard">
      <div className="projectImg">
      <a href="https://www.npmjs.com/package/timesheet-automation?activeTab=versions" target="_blank">
        <img src="assets/images/time.png" alt="project-image"/>
      </a>
      </div>
      <div className="projectDetails">
        <div className="projectTitle">
          <p>Timesheet Automation</p><p>(team project)</p></div>
        <div className="stackContainer">
          <span className="stack">Node.JS</span>
          <span className="stack">npm</span>
          <span className="stack">CLI</span>
          <span className="stack">API</span>
          <span className="stack">Git</span>
          <span className="stack">Agile</span>
        </div>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/timesheet-automation?activeTab=versions" target="_blank">
              <img
                src="assets/logo/live.png"
                width="50"
                height="50"
                className="projectLink1"
                alt="live"
              />
            </a>
          </li>
          <li>

            <a href="https://github.com/wenhao-lu/TimeKeeper" target="_blank">
              <img
                src="assets/logo/github.png"
                width="59"
                height="59"
                className="projectLink2"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="projectContent">
        <p className="projectText1">&#10095; Developed a CLI application using Node.js and Clockify's API</p>
        <p className="projectText2">&#10095; Contributed to CLI features, global functions, console log styling, API
debugging</p>
        <p>&#10095; Published package on NPM with 500+ downloads, allowing developers to manage time in code editor</p>
    </div>
  </div>

{/* project 2 */}
<div className="projectContainer">
    <div className="projectCard">
      <div className="projectImg">
        <a href="https://welcomr---cultural-hub.glitch.me/" target="_blank">
          <img src="assets/images/welcomr.png" alt="project-image"/>
        </a>
      </div>
      <div className="projectDetails">
        <div className="projectTitle">
          <p>Cultural-Hub APP</p></div>
        <div className="stackContainer">
          <span className="stack">React.JS</span>
          <span className="stack">Node.JS</span>
          <span className="stack">Git</span>
          <span className="stack">Agile</span>
          <span className="stack">Figma</span>
        </div>
        <ul>
          <li>
            <a href="https://welcomr---cultural-hub.glitch.me/" target="_blank">
              <img
                src="assets/logo/live.png"
                width="50"
                height="50"
                className="projectLink1"
                alt="live"
              />
            </a>
          </li>
          <li>

            <a href="https://github.com/wenhao-lu/Cultural-Hub" target="_blank">
              <img
                src="assets/logo/github.png"
                width="59"
                height="59"
                className="projectLink2"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="projectContent">
        <p className="projectText1">&#10095; Collaborated with UX Designers and Content Strategist to develop a three screens App</p>
        <p className="projectText2">&#10095; Solely developed the Event Listing page using React.JS, bringing designers' Figma prototype to life</p>
        <p>&#10095; Maintained mobile-friendly design principles and accessibility standards</p>
    </div>
  </div>

  {/* project 3 */}
  <div className="projectContainer">
    <div className="projectCard">
      <div className="projectImg">
        <a href="http://game.wlkevin.com/" target="_blank">
          <img src="assets/images/game.png" alt="project-image"/>
        </a>
      </div>
      <div className="projectDetails">
        <div className="projectTitle">
          <p>HTML 2D Game</p></div>
        <div className="stackContainer">
          <span className="stack">Canvas</span>
          <span className="stack">CSS</span>
          <span className="stack">JavaScript</span>
          <span className="stack">RESTful API</span>
        </div>
        <ul>
          <li>
            <a href="http://game.wlkevin.com/" target="_blank">
              <img
                src="assets/logo/live.png"
                width="50"
                height="50"
                className="projectLink1"
                alt="live"
              />
            </a>
          </li>
          <li>

            <a href="https://github.com/wenhao-lu/game" target="_blank">
              <img
                src="assets/logo/github.png"
                width="59"
                height="59"
                className="projectLink2"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="projectContent">
        <p className="projectText1">&#10095; Developed a 2D game using pure JavaScript and HTML Canvas</p>
        <p className="projectText2">&#10095; Implemented classic snake game mechanics with engaging anime-style UI, including music and sound effects</p>
        <p>&#10095; Integrated a RESTful API to store user score data on an online server and interact with the database</p>
    </div>
  </div>

  {/* project 4 */}
  <div className="projectContainer">
    <div className="projectCard">
      <div className="projectImg">
        <a href="http://movie.wlkevin.com/" target="_blank">
          <img src="assets/images/movie.webp" alt="project-image"/>
        </a>
      </div>
      <div className="projectDetails">
        <div className="projectTitle">
          <p>Movie App</p></div>
        <div className="stackContainer">
          <span className="stack">React.JS</span>
          <span className="stack">Node.JS</span>
          <span className="stack">Express</span>
          <span className="stack">MongoDB</span>
          <span className="stack">MERN</span>
        </div>
        <ul>
          <li>
            <a href="http://movie.wlkevin.com/" target="_blank">
              <img
                src="assets/logo/live.png"
                width="50"
                height="50"
                className="projectLink1"
                alt="live"
              />
            </a>
          </li>
          <li>

            <a href="https://github.com/wenhao-lu/movie-app" target="_blank">
              <img
                src="assets/logo/github.png"
                width="59"
                height="59"
                className="projectLink2"
                alt="github"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
      <div className="projectContent">
        <p className="projectText1">Developed a movie app using the MERN stack</p>
        <p className="projectText2">Integrated external APIs for displaying movie information and theater locations</p>
        <p>Implemented features for browsing latest movies, watching trailers, managing watchlist, and searching nearby theaters</p>
      </div>
  </div>

  


  </div>
  );
}
