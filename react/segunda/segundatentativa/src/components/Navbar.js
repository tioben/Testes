//Navbar component
export default function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="contents"><h1>{props.firstLetterLogo}<span className="span-neon">{props.lastLetterLogo}</span></h1></div>
      <div className="contents">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="nav-list">
            <li className="nav-item"><a href={props.hrefLink1}>{props.hrefName1}</a></li>
            <li className="nav-item"><a href={props.hrefLink2}>{props.hrefName2}</a></li>
            <li className="nav-item"><a href={props.hrefLink3}>{props.hrefName3}</a></li>
            <li className="nav-item"><a href={props.hrefLink4}>{props.hrefName4}</a></li>
            <li className="nav-item"><a href={props.hrefLink5}>{props.hrefName5}</a></li>
          </ul>
      </div>
    </nav>
  );
}
