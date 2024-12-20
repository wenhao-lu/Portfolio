import { useState, useEffect } from "react";
import "./Project.css";
import "../App.css";
import API_BASE_URL from "./apiConfig";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [works, setWorks] = useState([]);
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

  async function fetchWorks() {
    // the URL to call my APIs
    let response = await fetch(`${API_BASE_URL}/api/works`);
    let data = await response.json();
    //console.log(data);
    setWorks(data);
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
    fetchWorks();
  }, []);

  // Scroll up button
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
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
                    <span key={index} className="stack1">
                      {stackName}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project images */}
              <div className="projectIMG">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={`${API_BASE_URL}/${project.image}`}
                    alt="project-image"
                    className="projectImage"
                  />
                </a>
              </div>
            </div>

            <div className="projectRight">
              <div className="projectLink">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-globe"></i>
                </a>

                <a
                  href={project.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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

      <div className="workWrap" id="work">
        <div className="workHr">
          <i className="fab fa-android"></i>
          <i className="fab fa-android"></i>
          <i className="fab fa-android"></i>
        </div>
        <div className="workText">Work Experience</div>

        {/* mapping through the works table retrieving all the data */}
        {works.map((work) => (
          <div className="workContainer" key={work.id}>
            <div className="workCard">
              <div className="workDetails">
                <div>
                  <div className="workCompanyWrap">
                    <p className="workCompany">Unisync Group Limited</p>
                    <img
                      className="companyLogo"
                      src="assets/logo/unisyncLogo.webp"
                      alt="company-logo"
                    />
                  </div>
                  <div className="workHr2">
                    <hr></hr>
                  </div>
                  <p className="workTitle">
                    Electronic Store Front Assistant<br></br>Intern Jul-Aug 2023
                  </p>
                </div>
                <div>
                  {/* stacks */}
                  <div className="workStack">
                    {mapStackNames(work.stacks).map((stackName, index) => (
                      <span key={index} className="workStackSpan">
                        {stackName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="workImg">
                <a href={work.url} target="_blank">
                  <img
                    className="work-image"
                    src={`${API_BASE_URL}/${work.image}`}
                    alt="work-image"
                  />
                  <i className="fas fa-globe unisyncLink"></i>
                </a>
              </div>
            </div>
            <div className="workContent">
              <p className="projectText1">&#10095; {work.content1}</p>
              <p className="projectText2">&#10095; {work.content2}</p>
              <p>&#10095; {work.content3}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
