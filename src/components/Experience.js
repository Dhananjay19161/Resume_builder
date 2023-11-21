import React from 'react';
import add from "../add.png";
import bin from "../bin.png";
const Experience = ({ experience, onAdd, onRemove, onChange }) => {
  return (
    <div>
      <label onClick={onAdd} className="section-header">
        Experience
        <button type="button" className="add-button">
        <img src={add} alt="" />
        </button>
      </label>
      {experience.map((exp, index) => (
        <div key={index}>
          {experience.length > 1 && (
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="clear-button1"
            >
              <img src={bin} alt="" />
            </button>
          )}
          <input
            type="text"
            placeholder="Title"
            value={exp.title}
            onChange={(e) => onChange(index, 'title', e.target.value)}
          />
          <input
          
            type="date"
            placeholder="From"
            value={exp.from}
            onChange={(e) => onChange(index, 'from', e.target.value)}
          />
          <input
            type="date"
            placeholder="To"
            value={exp.to}
            onChange={(e) => onChange(index, 'to', e.target.value)}
          />
          <input
            type="text"
            placeholder="Designation"
            value={exp.designation}
            onChange={(e) => onChange(index, 'designation', e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={exp.description}
            onChange={(e) => onChange(index, 'description', e.target.value)}
          />
          
        </div>
      ))}
    </div>
  );
}

export default Experience;
