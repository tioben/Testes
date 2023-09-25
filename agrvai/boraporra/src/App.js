import Nav from "./components/Nav.js"
import "./styles/NavStyle.css"

import IntroSection from "./components/IntroSection.js"
import "./styles/IntroSection.css"

import AboutSection from "./components/AboutSection.js"
import "./styles/AboutSection.css"

import Skill from "./components/Skill.js"  
import "./styles/Skill.css"

import Project from "./components/Project.js"  
import "./styles/Project.css"

import Footer from "./components/Footer.js"  
import "./styles/Footer.css"

import "./styles/Responsivo.css"
import "./styles/ProgressBar.css"

import anime from 'animejs/lib/anime.es.js';

function App() {
  return (
    <div className="App">
      {/* NavBar. */}
      <Nav 
        firstLOGO = "G"
        lastLOGO = "M"
        item1 = "Início"
        item2 = "Sobre Mim"
        item3 = "Habilidades"
        item4 = "Projetos"
        item5 = "Contatos" 
      />

      {/* IntroSection. */}
      <IntroSection 
        h1="Olá, eu sou Gustavo Martins" 
        h2="DESENVOLVEDOR FRONT-END"
        p="Bem-vindo ao meu portfólio."
        hrefGIT = "https://github.com/tioben"
        hrefLINKEDIN = "https://www.linkedin.com/in/gustavo-martins-211669159/"
        hrefINSTA = "https://www.instagram.com/tioben_gh/"
        img = "img/COR-1.png"
      />

      {/* AboutSection. */}
      <AboutSection 
        windownsTitle = "Sobre"
        windownsTitleSpam = "Mim"

        img=".img/eu.jpg" 

        geralTitle = "Aqui está um pouco sobre mim."

        item1Title = "Um Pouco Sobre Mim"
        item1Paragraph = "Olá, meu nome é Gustavo Martins, tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas na FATEC-SP. Sou um grande fã da saga Senhor dos Anéis e meu jogo preferido é Shadows of Mordor. Atualmente, moro na zona leste da capital de São Paulo e compartilho minha vida com minha esposa, meu filho e duas adoráveis gatinhas. Tenho uma paixão inabalável por tecnologia, especialmente pelo desenvolvimento web front-end, e meu sonho é fundar uma empresa que traga soluções e melhorias para outras empresas por meio de aplicativos web e mobile."  
        
        item2Title = "Experiência Profissional" 
        item2Paragraph = "No campo profissional, atuo como técnico de automação predial pleno e sou responsável pela automação no complexo WTC. Minha atuação se concentra em planejar manutenções preventivas e implementar sistemas automáticos em equipamentos elétricos, como a iluminação de andares e lojas, monitoramento de subestações, desenvolvimento de lógicas para alarmes e casos de tratamento de exceção, bem como partidas de equipamentos por programação horária. Além disso, tenho experiência em sistemas de refrigeração e circuitos de água, incluindo recalque e/ou drenagem em reservatórios de esgoto, água potável, água pluvial e reuso. Também sou responsável pela criação da interface de tela gráfica (front-end) do produto final, garantindo a satisfação do cliente e desenvolvendo relatórios, KPIs e planos de ação."
        
        item3Title = "Meu Objetivo"
        item3Paragraph = "No momento, meu principal objetivo é <span style={{ textDecoration: 'underline' }}>conquistar minha primeira oportunidade no mercado de desenvolvimento front-end</span>. Definitivamente este é maior sonho da minha vida nessa fase e estou ciente de que o primeiro passo pode ser desafiador, mas acredito que após essa fase inicial, o céu é o limite para minha carreira que com certeza será promissora."
      />

      {/* SkillsSection and skill component. */}
      <section id="skills-section" className="skills-section">
        <h1>Minhas <span className="span-neon">Habilidades</span></h1>
        <div className="skills-container">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </section>

      {/* ProjectSection and project component. */}
      <section id="project-section" className="projects-section"> {/* Corrija "class" para "className" */}
        <h1>Meus <span className="span-neon">Projetos</span></h1>
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>

      {/* Footer. */}
      <Footer />
    </div>
  );
}

export default App;

