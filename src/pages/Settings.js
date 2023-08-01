import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-buttons">
        <Link to="/account">
          <button className="settings-button">
            <FaUser className="icon" />{' '}
            <span className="button-text">Account</span>
          </button>
        </Link>
        <Link to="/about">
          <button className="settings-button">
            <FaInfoCircle className="icon" />{' '}
            <span className="button-text">About Us</span>
          </button>
        </Link>
        <Link to="/logout">
          <button className="settings-button">
            <FaSignOutAlt className="icon" />{' '}
            <span className="button-text">Log Out</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
