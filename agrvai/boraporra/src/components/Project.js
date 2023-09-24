import React from 'react';

export default function Project(props) {
  const projectStyle = {
    color: '#00f4ff',
  };

  return (
    <div className="project">
      <img src="img/pokedex.png" alt="Projeto Pokedex" aria-label="Projeto Pokedex" />
      <h2>Pokedex</h2>
      <p>Consumo de API pokemon.</p>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <h4 style={projectStyle}>Tecnologias</h4>
        </li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <div className="btn-box-project">
        <a
          href="https://tiobenpokedex.netlify.app/"
          className="btn-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saiba mais
        </a>
      </div>
    </div>
  );
}
