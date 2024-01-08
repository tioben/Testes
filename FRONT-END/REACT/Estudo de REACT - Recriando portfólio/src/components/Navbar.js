//Navbar component
export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="contents"><h1>G<span className="span-neon">M</span></h1></div>
      <div className="contents">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-list">
              <li className="nav-item"><a href="#">Inicio</a></li>
              <li className="nav-item"><a href="#">Sobre mim</a></li>
              <li className="nav-item"><a href="#">Habilidades</a></li>
              <li className="nav-item"><a href="#">Projetos</a></li>
              <li className="nav-item"><a href="#">Contatos</a></li>
          </ul>
      </div>
    </nav>
  );
}
