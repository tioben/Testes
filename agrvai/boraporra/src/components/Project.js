import React from 'react';

export default function Project(props) {
  const projectStyle = {
    color: '#00f4ff',
  };

  return (
    <div className="project">
      <img src={props.img} alt={props.alt} aria-label={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <h4 style={projectStyle}>Tecnologias</h4>
        </li>
        <li>{props.tec1}</li>
        <li>{props.tec2}</li>
        <li>{props.tec3}</li>
        <li>{props.tec4}</li>
        <li>{props.tec5}</li>
      </ul>
      <div className="btn-box-project">
        <a
          href= {props.aboutMore}
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
