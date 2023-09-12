//Section1 - inicio
export default function Section1(props) {
    return (
    <section className="intro-section animated-section">
        <div className="intro-message animate-in">
            <h1>Olá, eu sou Gustavo Martins</h1>
            <h2 id="typing-text">DESENVOLVEDOR FRONT-END</h2>
            <p>Bem-vindo ao meu portfólio.<span id="typing-text"></span></p>
            <div className="social-icons">
                <a href="https://github.com/tioben" target="_blank"><i className="fab fa-github fa-fw"></i></a>
                <a href="https://www.linkedin.com/in/seu-usuario-do-LinkedIn" target="_blank"><i className="fab fa-linkedin fa-fw"></i></a>
                <a href="https://www.instagram.com/seu-usuario-do-Instagram" target="_blank"><i className="fab fa-instagram fa-fw"></i></a>
            </div>         
        </div>
        <div className="intro-image animate-in">
            <img src="/img/eu.jpg" alt="Sua Foto" />
        </div>
    </section>
    );
}
