import React from 'react';

const imagePath = props.img;
export default function AboutSection(props) {
  return (
    <section id="about-section" className="about-me-section">
      <h1>Sobre <span className="span-neon">Mim</span></h1>
      <div className="profile-picture">
        <img src="{img.props}" alt="Sua Foto" />
        <span className="circle-spin"></span>
      </div>
      <p>Aqui está um pouco sobre mim.</p>
      <div className="btn-box">
        <a href="#" className="btn" id="btnSaibaMais">Leia mais</a>
      </div>
      <div id="secaoOculta">
        <h1>Um Pouco Sobre Mim</h1>
        <p>Olá, meu nome é Gustavo Martins, tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC-SP. Sou um grande fã da saga Senhor dos Anéis e meu jogo preferido é Shadows of Mordor. Atualmente, moro na zona leste da capital de São Paulo e compartilho minha vida com minha esposa, meu filho e duas adoráveis gatinhas. Tenho uma paixão inabalável por tecnologia, especialmente pelo desenvolvimento web front-end, e meu sonho é fundar uma empresa que traga soluções e melhorias para outras empresas por meio de aplicativos web e mobile.</p>
        <br />
        <h1>Experiência Profissional</h1>
        <p>No campo profissional, atuo como técnico de automação predial pleno e sou responsável pela automação no complexo WTC. Minha atuação se concentra em planejar manutenções preventivas e implementar sistemas automáticos em equipamentos elétricos, como a iluminação de andares e lojas, monitoramento de subestações, desenvolvimento de lógicas para alarmes e casos de tratamento de exceção, bem como partidas de equipamentos por programação horária. Além disso, tenho experiência em sistemas de refrigeração e circuitos de água, incluindo recalque e/ou drenagem em reservatórios de esgoto, água potável, água pluvial e reuso. Também sou responsável pela criação da interface de tela gráfica (front-end) do produto final, garantindo a satisfação do cliente e desenvolvendo relatórios, KPIs e planos de ação.</p>
        <br />
        <h1>Meu Objetivo</h1>
        <p>No momento, meu principal objetivo é <span style={{ textDecoration: 'underline' }}>conquistar minha primeira oportunidade no mercado de desenvolvimento front-end</span>. Definitivamente este é maior sonho da minha vida nessa fase e estou ciente de que o primeiro passo pode ser desafiador, mas acredito que após essa fase inicial, o céu é o limite para minha carreira que com certeza será promissora.</p>
        <br />
      </div>
    </section>
  );
}
