import React from 'react';

//NavBar
import Navbar from './components/Navbar.js'; //component
import "./styles/Navbar-Style.css"; //style
//Section1 - Inicio
import Section1 from './components/Section1.js'; //component
import "./styles/Section1-Style.css"; //style
//Section2 - Sobre mim
import Section2 from './components/Section2.js'; //component
import "./styles/Section2-Style.css"; //style
//Section3 - Skills
import Section3 from './components/Section3.js'; //component
import "./styles/Section3-Style.css"; //style
//Section4 - Projetos
import Section4 from './components/Section4.js'; //component
import "./styles/Section4-Style.css"; //style
//Footer
import Footer from './components/Footer.js'; //component
import "./styles/Footer-Style.css"; //style
//Progress Bar
import "./styles/ProgressBar.css"; //style
//Functions
import './components/Functions.js'; //component
//Progress Bar
import "./styles/Responsivo.css"; //style


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

