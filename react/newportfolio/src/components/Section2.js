//Section2 - Sobre mim
export default function Section2(props) {
    return (
        <section className="about-me-section">
            <h1>Sobre <span className="span-neon">Mim</span></h1>
            <div className="profile-picture">
                <img src="/img/eu.jpg" alt="Sua Foto" />
                <span className="circle-spin"></span>
            </div>
            <p>Aqui está um pouco sobre mim.</p>
            <div className="btn-box">
                <a href="#" className="btn neon-btn">Saiba mais</a>
            </div>
        </section>
    );
}
