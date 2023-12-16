import { useState, useEffect } from "react";
import "./Education.css";

/*
education props: {
  id: number,
  degree: string,
  major: string,
  school: string,
  date: datetime,
  course: string,
}
*/

export default function Education() {
  const [educations, setEducations] = useState([]);
  // fetch all the education data from my laravel-CMS backend server using API
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
          <div className="educationCourse">{education.course}</div>
        </div>
      ))}
    </div>
  );
}
