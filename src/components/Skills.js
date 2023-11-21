import React from 'react';

const Skills = ({ skills,onAdd,onChange }) => {
  return (
    <div>
      <label onClick={onAdd} className="section-header">
        Skills
        {/* <button
          type="button"
          onClick={onAdd}
          className="add-button"
        >
          <img src={add} alt="" />
        </button>  */}
      </label>
      <div className="section-content">
        {Object.keys(skills).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={skills[key]}
            onChange={(e) => onChange(key, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
