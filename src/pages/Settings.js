import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Settings.css'; // Import your CSS file for custom styling

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-buttons">
        <Link to="/account">
          <button className="settings-button">Account</button>
        </Link>
        <Link to="/about">
          <button className="settings-button">About Us</button>
        </Link>
        <Link to="/logout">
          <button className="settings-button">Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
