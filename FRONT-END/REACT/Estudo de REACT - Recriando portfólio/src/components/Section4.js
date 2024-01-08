// Section4 - Projects
export default function Section4(props) {
    return (
        <section className="projects-section">
            <h1>Meus <span className="span-neon">Projetos</span></h1>
            <div className="projects-container">
                <div className="project">
                    <img src="img/project1.jpg" alt="Projeto 1" />
                    <h2>Projeto 1</h2>
                    <p>Descrição do Projeto 1.</p>
                </div>
                <div className="project">
                    <img src="img/project2.jpg" alt="Projeto 2" />
                    <h2>Projeto 2</h2>
                    <p>Descrição do Projeto 2.</p>
                </div>
                <div className="project">
                    <img src="img/project3.jpg" alt="Projeto 3" />
                    <h2>Projeto 3</h2>
                    <p>Descrição do Projeto 3.</p>
                </div>
            </div>
        </section>
    );
}
