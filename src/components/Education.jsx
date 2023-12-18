import { useState, useEffect } from "react";
/*import "./Education.css";*/
import "../App.css";

export default function Education() {
  const [educations, setEducations] = useState([]);
  // fetch all the education data from my backend server using API
  async function fetchEducations() {
    let response = await fetch("https://c9674390.mywhc.ca/api/educations");
    let data = await response.json();
    //console.log(data);
    setEducations(data);
  }

  useEffect(() => {
    fetchEducations();
  }, []);

  return (
    <div className="educationWrap" id="education">
      <p className="educationText">Education</p>
      {/* mapping through the educations table retrieving all the data */}
      {educations.map((education) => (
        <div className="educationContainer" key={education.id}>
          <div className="educationDrgree">{education.degree}</div>
          <div className="educationSchool">{education.school}</div>
          <div className="educationMajor">{education.major}</div>
          <div className="educationDate">{education.date}</div>
        </div>
      ))}

      {/* courseContainer-1 */}
      <div className="courseContainer1">
        <div className="courseCard">
          <p>FULL STACK<br></br>FRONTEND&BACKEND</p>
          <i className="far fa-window-restore"></i>
          <div className="courseWrap">
            <span className="course">HTML</span>
            <span className="course">CSS</span>
            <span className="course">JavaScript</span>
            <span className="course">C#</span>
            <span className="course">PHP</span>
            <span className="course">MySQL</span>
            <span className="course">React</span>
            <span className="course">Node.js</span>
            <span className="course">Express</span>
          </div>
        </div>

        <div className="courseCard">
          <p>LIBRARIES&<br></br>FRAMEWORKS</p>
          <i className="fab fa-laravel"></i>
          <div className="courseWrap">
            <span className="course">jQuery</span>
            <span className="course">Laravel</span>
            <span className="course">Bootstrap</span>
            <span className="course">ASP.NET</span>
            <span className="course">Jasmine</span>
            <span className="course">LAMP</span>
            <span className="course">MERN</span>
          </div>
        </div>

        <div className="courseCard">
          <p>IDE&<br></br>Tools</p>
          <i className="fas fa-tools"></i>
          <div className="courseWrap">
            <span className="course">VS Code</span>
            <span className="course">Postman</span>
            <span className="course">MAMP</span>
            <span className="course">CLI</span>
            <span className="course">Localwp</span>
            <span className="course">MongoDB</span>
            <span className="course">DBeaver</span>
          </div>
        </div>
      
      </div>

      {/* courseContainer-2 */}
      <div className="courseContainer2">
        <div className="courseCard">
          <p>TECHNIQUES</p>
          <i className="fas fa-sitemap"></i>
          <div className="courseWrap">
            <span className="course">MVC</span>
            <span className="course">RESTful API</span>
            <span className="course">Hosting</span>
            <span className="course">SEO</span>
            <span className="course">Security</span>
            <span className="course">Usability</span>
          </div>
        </div>

        <div className="courseCard">
          <p>E-COMMERCE</p>
          <i className="fa-solid fa-cart-shopping"></i>
          <div className="courseWrap">
            <span className="course">Shopify</span>
            <span className="course">WordPress</span>
            <span className="course">CMS</span>
          </div>
        </div>

        <div className="courseCard">
          <p>Project Management</p>
          <i className="fa-solid fa-list-check"></i>
          <div className="courseWrap">
            <span className="course">Git</span>
            <span className="course">Agile</span>
            <span className="course">Jira</span>
            <span className="course">Trello</span>
            <span className="course">Scrum</span>
          </div>
        </div>

      </div>

    </div>
  );
}
