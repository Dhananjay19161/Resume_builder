import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { useNavigate } from "react-router-dom";
import "./App.css";
import bin from "./bin.png";

import save from "./save.png";

function ResumeBuilder() {
  const navigate = useNavigate();
  const [name, setName] = useState("Jane Doe");
  const [email, setEmail] = useState("john@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [summary, setSummary] = useState(
    "Experienced software developer with a strong background in web development"
  );

  const [experience, setExperience] = useState([
    {
      title: "Amazon",
      from: "2018-01-01",
      to: "2021-12-31",
      designation: "Senior Developer",
      description: "Worked on various web projects",
    },
  ]);

  const [education, setEducation] = useState([
    {
      institute: "University of Example",
      course: "BTech CSE",
      cgpaOrPercentage: "3.7",
      yearOfPassing: "2017",
    },
  ]);

  const [skills, setSkills] = useState({
    ProgrammingLanguages: "JavaScript, React, Node.js",
    DeveloperTools: "Visual Studio Code, Git",
    Databases: "MySQL, MongoDB",
    Technologies: "Express.js, Bootstrap",
  });

  const [projects, setProjects] = useState([
    {
      title: "E-commerce Website",
      from: "2019-04-15",
      to: "2020-06-30",
      description: "Built a full-fledged e-commerce website",
    },
  ]);
  const [isPreviewUpdated, setIsPreviewUpdated] = useState(false);

  const handlePersonalInfoChange = (field, value) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "summary":
        setSummary(value);
        break;
      default:
        break;
    }
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleSkillsChange = (field, value) => {
    setSkills({ ...skills, [field]: value });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };
  // Function to add an experience field
  const handleAddExperience = () => {
    setExperience([...experience, {}]);
  };

  // Function to remove an experience field by index
  const handleRemoveExperience = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };
  // Function to add an education field
  const handleAddEducation = () => {
    setEducation([...education, {}]);
  };

  // Function to remove an education field by index
  const handleRemoveEducation = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };
  // Function to add a project field
  const handleAddProject = () => {
    setProjects([...projects, {}]);
  };

  // Function to remove a project field by index
  const handleRemoveProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };
  const handleClear = () => {
    setName(""); // Clear name
    setEmail(""); // Clear email
    setPhone(""); // Clear phone
    setSummary(""); // Clear summary
    setExperience([
      {
        title: "",
        from: "",
        to: "",
        designation: "",
        description: "",
      },
    ]); // Clear experience
    setEducation([
      {
        institute: "",
        course: "",
        cgpaOrPercentage: "",
        yearOfPassing: "",
      },
    ]); // Clear education
    setSkills({
      ProgrammingLanguages: "",
      DeveloperTools: "",
      Databases: "",
      Technologies: "",
    }); // Clear skills
    setProjects([
      {
        title: "",
        from: "",
        to: "",
        description: "",
      },
    ]);
    // Clear projects
    setIsPreviewUpdated(false); // Reset the preview
  };

  const handleSave = () => {
    setIsPreviewUpdated(true);
    navigate("/preview", {
      state: {
        resumeData: {
          name,
          email,
          phone,
          summary,
          experience,
          education,
          skills,
          projects,
        },
      },
    });
  };

  return (
    <div className="resume-container">
      <div className="form-container">
        <h1>Resume Builder</h1>
        <PersonalInfo
          name={name}
          email={email}
          phone={phone}
          summary={summary}
          onChange={handlePersonalInfoChange}
        />

        <Experience
          experience={experience}
          onAdd={handleAddExperience}
          onRemove={handleRemoveExperience}
          onChange={handleExperienceChange}
        />

        <Education
          education={education}
          onAdd={handleAddEducation}
          onRemove={handleRemoveEducation}
          onChange={handleEducationChange}
        />

        <Skills
          skills={skills}
          // onAdd={handleAddSkills}
          onChange={handleSkillsChange}
        />

        <Project
          projects={projects}
          onAdd={handleAddProject}
          onRemove={handleRemoveProject}
          onChange={handleProjectChange}
        />

        <button onClick={handleSave} className="save-button">
          <img src={save} alt="" />
        </button>

        <button onClick={handleClear} className="clear-button">
          <img src={bin} alt="" />
        </button>
      </div>
      {/* 
      <div className="preview">
      <h2>Preview:</h2>
        {isPreviewUpdated && (
          
          <div>
            
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
            <h3>EXPERIENCE</h3>

            <hr className="hr-line" />

            {experience.map((exp, index) => (
              <p key={index}>
                <div className="Exp_heading">
                  <b>{exp.title}</b>
                </div>
                <div className="sub-heading">
                  <p>{exp.designation}</p>
                </div>
                <p>
                  From: {exp.from} To: {exp.to}
                </p>
                <p> {exp.description} </p>
              </p>
            ))}

            <h3>EDUCATION</h3>
            <hr className="hr-line" />
            <p>
              {education.map((edu, index) => (
                <p key={index}>
                  <p>
                    <b>{edu.institute}</b>
                  </p>
                  <div className="left-text">
                    <p>{edu.course}</p>
                    <p>
                      <b>CGPA/Percentage - {edu.cgpaOrPercentage}</b>
                    </p>
                    <p>{edu.yearOfPassing}</p>
                  </div>
                </p>
              ))}
            </p>
            <h3>SKILLS</h3>
            <hr className="hr-line" />
            <p>
              {Object.keys(skills).map((key) => (
                <li key={key}>
                  <b> {key}</b> : {skills[key]}
                </li>
              ))}
            </p>
            <h4>PROJECTS</h4>
            <hr className="hr-line" />
            <p>
              {projects.map((project, index) => (
                <p key={index}>
                  <li>
                    <b>{project.title}</b>
                  </li>
                  <p>{project.description}</p>
                  <p>
                    From: {project.from} To: {project.to}
                  </p>
                </p>
              ))}
            </p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default ResumeBuilder;
