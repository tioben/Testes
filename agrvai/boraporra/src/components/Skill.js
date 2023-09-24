import React from 'react';

export default function Skill(props) {
  const skillStyle = {
    color: '#bbff00',
  };

  const percentStyle = {
    '--clr': '#bbff00',
    '--num': 80,
  };

  return (
    <div className="skill">
      <i className="fab fa-js" style={skillStyle}></i>
      <h2>JavaScript</h2>
      <div className="container">
        <div className="card">
          <div className="percent" style={percentStyle}>
            <div className="dot"></div>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="number">
              <h2>80<span>%</span></h2>
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
