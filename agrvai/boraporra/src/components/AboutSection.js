import React from 'react';

export default function AboutSection(props) {
  return (
    <section id="about-section" className="about-me-section">
      <h1>{props.windownsTitle}<span className="span-neon">{props.windownsTitleSpam}</span> </h1>
      <div className="profile-picture">
        <img src={props.img} alt="Sua Foto" />
        <span className="circle-spin"></span>
      </div>
      <p>{props.geralTitle}</p>
      <div className="btn-box">
        <a href="#" className="btn" id="btnSaibaMais">Leia mais</a>
      </div>
      <div id="secaoOculta">
        <h1>{props.item1Title}</h1>
        <p>{props.item1Paragraph}</p>
        <br />
        <h1>{props.item2Title}</h1>
        <p>{props.item2Paragraph}</p>
        <br />
        <h1>{props.item3Title}</h1>
        <p>{props.item3Paragraph}</p>
        <br />
      </div>
    </section>
  );
}
