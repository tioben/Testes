import React from 'react';

export default function Nav(props) {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="contents">
          <h1>{props.firstLOGO}<span className="span-neon">{props.lastLOGO}</span></h1>
        </div>
        <div className="contents">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776; Menu</label>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#intro-section">{props.item1}</a>
            </li>
            <li className="nav-item">
              <a href="#about-section">{props.item2}</a>
            </li>
            <li className="nav-item">
              <a href="#skills-section">{props.item3}</a>
            </li>
            <li className="nav-item">
              <a href="#project-section">{props.item4}</a>
            </li>
            <li className="nav-item">
              <a href="#footer">{props.item5}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
