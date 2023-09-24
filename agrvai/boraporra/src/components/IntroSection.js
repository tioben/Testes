import React from 'react';

export default function IntroSection(props) {
  return (
    <section id="intro-section" className="intro-section animated-section">
      <div className="intro-message animate-in">
        <h1>Olá, eu sou Gustavo Martins</h1>
        <h2>DESENVOLVEDOR FRONT-END</h2>
        <p>Bem-vindo ao meu portfólio.</p>
        <span id="typing-text"></span>
        <div className="social-icons">
          <a href="https://github.com/tioben" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-fw"></i>
          </a>
          <a href="https://www.linkedin.com/in/gustavo-martins-211669159/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-fw"></i>
          </a>
          <a href="https://www.instagram.com/tioben_gh/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-fw"></i>
          </a>
        </div>
      </div>
      <div className="intro-image animate-in">
        <img src="img/COR-1.png" alt="Sua Foto" id="imagem" />
      </div>
    </section>
  );
}
