import React, { useState } from 'react';
import './Toggle.css';

const Toggle = ({ darkMode, toggleTheme }) => {
  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div>
      <label className="switch">
        <input className="toggle" type="checkbox" checked={darkMode} onChange={handleToggle} />
        <span className="slider"></span>
        <span className="card-side"></span>
      </label>
    </div>
  );
};

export default Toggle;
