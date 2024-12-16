import { useState, useEffect } from "react";
import "./Project.css";
import "../App.css";
import API_BASE_URL from "./apiConfig";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProjects() {
    let response = await fetch(`${API_BASE_URL}/api/projects`);
    let data = await response.json();
    console.log(data);
    setProjects(data);
  }
  
  async function fetchStacks() {
    let response = await fetch(`${API_BASE_URL}/api/stacks`);
    let data = await response.json();
    //console.log(data);
    setStacks(data);
  }

  function mapStackNames(projectStacks) {
    return projectStacks.map((stackId) => {
      const stack = stacks.find((s) => s.id === stackId);
      return stack ? stack.name : "Unknown Stack";
    });
  }

  useEffect(() => {
    fetchStacks();
    fetchProjects();
  }, []);

  // Scroll up button
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="projectWrap" id="projects">
      <div>
        <p className="projectText">Projects</p>
      </div>

      {/* Scroll-up button */}
      <div className="scrollUpButton" onClick={scrollUp}>
        <i className="fas fa-arrow-up"></i>
      </div>

      {/* Mapping through the projects table and displaying project data */}
      {projects.map((project) => (
        <div className="projectCont" key={project.id}>
          <div className="projectLeft">
            <div className="pLink">
              {/* Display stacks */}
              {/* 
              <div className="stackWrap">
                {project.stackNames.map((stackName, index) => (
                  <span key={index} className="stack1">
                    {stackName}
                  </span>
                ))}
              </div>
              */}
              <div className="stackWrap">
            {mapStackNames(project.stacks).map((stackName, index) => (
              <span key={index} className="stack1">{stackName}</span>
            ))}
            </div>



            </div>

            {/* Project images */}
            <div className="projectIMG">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img src={`${API_BASE_URL}/${project.image}`} alt="project-image" className="projectImage" />
              </a>
            </div>
          </div>

          <div className="projectRight">
            <div className="projectLink">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe"></i>
              </a>

              <a href={project.slug} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <div className="pDes">
              <div className="projectName">
                <p>{project.title}</p>
              </div>

              <div className="projectContent1">
                <p className="projectText1">&#10095; {project.content1}</p>
                <p className="projectText2">&#10095; {project.content2}</p>
                <p className="projectText3">&#10095; {project.content3}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
