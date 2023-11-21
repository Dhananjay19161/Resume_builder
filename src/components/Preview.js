// PreviewPage.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const PreviewPage = () => {
  const location = useLocation();
  const { resumeData } = location.state || {};

  if (!resumeData) {
    // Handle the case when resumeData is not available
    return (
      <div>
        <p>Error: Resume data not found.</p>
        <Link to="/">Go back to Resume Builder</Link>
      </div>
    );
  }

  const {
    name,
    email,
    phone,
    summary,
    experience,
    education,
    skills,
    projects,
  } = resumeData;

  return (
    <div className="resume-container">
      <div className="preview-container">
        <h1 className="centered-text">{name}</h1>
        <div className="centered-text">
          <p>
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>{phone}</p>
        </div>

        <h3>SUMMARY</h3>
        <hr className="hr-line" />
        <p>{summary}</p>

        <h3>EDUCATION</h3>
        <hr className="hr-line" />
        {education.map((edu, index) => (
          <div key={index}>
             <span class="left"><b><u>{edu.institute} </u></b></span>
            <span class="right"><b>{edu.yearOfPassing} </b></span>
              <br></br>
              <p><i>{edu.course}  <b> - CGPA</b> - {edu.cgpaOrPercentage}</i></p>
              
            
          </div>
        ))}

        <h3>TECHNICAL SKILLS</h3>
        <hr className="hr-line" />

        {Object.keys(skills).map((key) => (
          <p key={key}>
            <b>{key}</b>: {skills[key]}
          </p>
        ))}

        <h3> WORK EXPERIENCE</h3>
        <hr className="hr-line" />

        {experience.map((exp, index) => (
          <div key={index} className="Exp_heading">
            <b>{exp.title}</b>
            <span class="right"><b>{exp.from} - {exp.to}</b></span>
            <div className="sub-heading">
              <p>
              <span class="left"><i><u>{exp.designation}</u></i></span>
               <br></br>
              </p>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}

        <h3>PROJECTS</h3>
        <hr className="hr-line" />

        {projects.map((project, index) => (
          <div key={index}>
            
  
              <span class="left"><b><u>{project.title}</u></b></span>
              <span class="right"><b>{project.from} - {project.to}</b></span>
             
           <br/>
            <p>{project.description}</p>
            
            
          </div>
        ))}

        <Link to="/">Go back to Resume Builder</Link>
      </div>
    </div>
  );
};

export default PreviewPage;
