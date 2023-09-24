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

function App() {
  return (
    <div className="App">
      {/* NavBar. */}
      <Nav />

      {/* IntroSection. */}
      <IntroSection />

      {/* AboutSection. */}
      <AboutSection img=".img/eu.jpg"/>

      {/* SkillsSection and skill component. */}
      <section id="skills-section" className="skills-section">
        <h1>Minhas <span className="span-neon">Habilidades</span></h1>
        <div className="skills-container">
          <Skill />
        </div>
      </section>

      {/* ProjectSection and project component. */}
      <section id="project-section" className="projects-section"> {/* Corrija "class" para "className" */}
        <h1>Meus <span className="span-neon">Projetos</span></h1>
        <div className="projects-container">
          <Project />
        </div>
      </section>

      {/* Footer. */}
      <Footer />
    </div>
  );
}

export default App;
