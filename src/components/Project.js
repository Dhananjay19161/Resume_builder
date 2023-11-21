import React from 'react';
import add from "../add.png";
import bin from "../bin.png";
const Project = ({ projects, onAdd, onRemove, onChange }) => {
  return (
    <div>
      <label onClick={onAdd} className="section-header">
        Projects
        <button type="button" className="add-button">
        <img src={add} alt="" />
        </button>
      </label>
      {projects.map((project, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Title"
            value={project.title}
            onChange={(e) => onChange(index, 'title', e.target.value)}
          />
          <input
            type="Date"
            placeholder="From"
            value={project.from}
            onChange={(e) => onChange(index, 'from', e.target.value)}
          />
          <input
            type="Date"
            placeholder="To"
            value={project.to}
            onChange={(e) => onChange(index, 'to', e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={project.description}
            onChange={(e) => onChange(index, 'description', e.target.value)}
          />
          {projects.length > 1 && (
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

export default Project;
