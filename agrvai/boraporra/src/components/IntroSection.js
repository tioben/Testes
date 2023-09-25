import React from 'react';

export default function IntroSection(props) {
  return (
    <section id="intro-section" className="intro-section animated-section">
      <div className="intro-message animate-in">
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <p>{props.p}</p>
        <span id="typing-text"></span>
        <div className="social-icons">
          <a href={props.hrefGIT} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-fw"></i>
          </a>
          <a href={props.hrefLINKEDIN} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-fw"></i>
          </a>
          <a href={props.hrefiNSTA} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-fw"></i>
          </a>
        </div>
      </div>
      <div className="intro-image animate-in">
        <img src={props.img} alt="Sua Foto" id="imagem" />
      </div>
    </section>
  );
}
