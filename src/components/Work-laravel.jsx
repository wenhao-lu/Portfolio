import { useState, useEffect } from "react";
import "../App.css";
import API_BASE_URL from "./apiConfig";

export default function WorkList() {

  const [works, setWorks] = useState([]);

  // use Larevel backend API to fetch all works info from the database
  async function fetchWorks() {
    // the URL to call my APIs
    let response = await fetch(`${API_BASE_URL}/api/works`);
    let data = await response.json();
    //console.log(data);
    setWorks(data);
  }
  
  useEffect(() => {
    fetchWorks();
  }, []);

  return (
  
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
            <img className="companyLogo" src="assets/logo/unisyncLogo.webp" alt="company-logo"/>
          </div>
          <div className="workHr2"><hr></hr></div>
          <p className="workTitle">Electronic Store Front Assistant<br></br>Intern Jul-Aug 2023</p>
        </div>
        <div>
        {/* stacks */}
        <div className="workStack">
          {[...Array(10).keys()].map((index) => {
            const workStackKey = `stack${index + 1}`;
            // If stack data is null, render nothing on the HTML
            if (!work[workStackKey]) {
              return null;
            }
            return (
              <span key={index} className="workStackSpan">
                {work[workStackKey]}
              </span>
              );
          })}
        </div>

        </div>
      </div>

      <div className="workImg">
        <a href={work.url} target="_blank">
          <img className="work-image" src={`${API_BASE_URL}/${work.image}`} alt="work-image"/>
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

  

  );
}
