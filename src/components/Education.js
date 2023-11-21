import React from 'react';
import add from "../add.png";
import bin from "../bin.png";
const Education = ({ education, onAdd, onRemove, onChange }) => {
  return (
    <div>
      <label onClick={onAdd} className="section-header">
        Education
        <button type="button" className="add-button">
        <img src={add} alt="" />
        </button>
      </label>
      {education.map((edu, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Institute"
            value={edu.institute}
            onChange={(e) => onChange(index, 'institute', e.target.value)}
          />
          <input
            type="text"
            placeholder="Course"
            value={edu.course}
            onChange={(e) => onChange(index, 'course', e.target.value)}
          />
          <input
            type="text"
            placeholder="CGPA or Percentage"
            value={edu.cgpaOrPercentage}
            onChange={(e) => onChange(index, 'cgpaOrPercentage', e.target.value)}
          />
          <input
            type="text"
            placeholder="Year of Passing"
            value={edu.yearOfPassing}
            onChange={(e) => onChange(index, 'yearOfPassing', e.target.value)}
          />
          {education.length > 1 && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="clear-button1"
            >
             <img src={bin} alt="" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Education;
