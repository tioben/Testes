import React from 'react';

export default function Skill(props) {
  const skillStyle = {
    color: props.iconColor,
  };

  const percentStyle = {
    '--clr': props.percentColor,
    '--num': props.percentNumber,
  };

  return (
    <div className="skill">
      <i className="fab fa-js" style={skillStyle}></i>
      <h2>{props.title}</h2>
      <div className="container">
        <div className="card">
          <div className="percent" style={percentStyle}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>{props.percentNumber}<span>%</span></h2>
              <p>{props.title}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
