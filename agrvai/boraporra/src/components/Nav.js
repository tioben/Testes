import React from 'react';

export default function Nav(props) {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="contents">
          <h1>G<span className="span-neon">M</span></h1>
        </div>
        <div className="contents">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776; Menu</label>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#intro-section">Início</a>
            </li>
            <li className="nav-item">
              <a href="#about-section">Sobre mim</a>
            </li>
            <li className="nav-item">
              <a href="#skills-section">Habilidades</a>
            </li>
            <li className="nav-item">
              <a href="#project-section">Projetos</a>
            </li>
            <li className="nav-item">
              <a href="#footer">Contatos</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
