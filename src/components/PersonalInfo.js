import React from 'react';

const PersonalInfo = ({ name, email, phone, summary, onChange }) => {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" value={name} onChange={(e) => onChange('name', e.target.value)} />

      <label htmlFor="email">Email</label>
      <input type="text" value={email} onChange={(e) => onChange('email', e.target.value)} />

      <label htmlFor="phone">Phone</label>
      <input type="text" value={phone} onChange={(e) => onChange('phone', e.target.value)} />

      <label htmlFor="summary">Summary</label>
      <textarea value={summary} onChange={(e) => onChange('summary', e.target.value)} />
    </div>
  );
}

export default PersonalInfo;
