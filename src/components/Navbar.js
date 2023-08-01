import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every 1000ms (1 second)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <span className="current-date">{currentDate.toLocaleString()}</span>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <FaIcons.FaTimes />
            </Link>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
