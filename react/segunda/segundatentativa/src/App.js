//NavBar
import Navbar from './components/Navbar.js'; //component
import "./styles/NavbarStyle.css"; //style

//Functions
import './components/Functions.js'; //component

//Responsivo
import "./styles/Responsivo.css"; //style

function App() {
  return (
    <div className="App">
      <Navbar hrefLink1="#" hrefLink2="#" hrefLink3="#" hrefLink4="#" hrefLink5="#"
              hrefName1="Inicio" hrefName2="Sobre mim" hrefName3="Habilidades" hrefName4="Projetos" hrefName5="Contatos"
              firstLetterLogo = "G" lastLetterLogo = "M"
      />


    </div>
  );
}

export default App;
