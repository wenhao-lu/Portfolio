import { useState, useEffect } from "react";
import "./Project.css";
import "../App.css";


export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  // use Larevel backend API to fetch all projects info from the database
  async function fetchProjects() {
    // the URL to call my APIs
    let response = await fetch("https://www.wlkevin.com/api/showcases");
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


        {/* mapping through the projects table retrieving all the data */}
        {projects.map((project) => (

        <div className="projectCont" key={project.id}>
            <div className="projectLeft">
              <div className="pLink">
                {/* stacks */}
                <div className="stackWrap">
                  {[...Array(10).keys()].map((index) => {
                    const stackKey = `stack${index + 1}`;
                    // If stack data is null, render nothing on the HTML
                    if (!project[stackKey]) {
                      return null;
                    }
                    return (
                      <span key={index} className="stack1">
                        {project[stackKey]}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* project images */}
              <div className="projectIMG">
                <a href={project.url} target="_blank">
                  <img src={project.image} alt="project-image" className="projectImage" />
                </a>
              </div>
            </div>

            <div className="projectRight">
              <div className="projectLink">
                <a href={project.url} target="_blank">
                  <i className="fas fa-globe"></i>
                </a>

                <a href={project.slug} target="_blank">
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
