import "../App.css";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="glass about-card">
                    <h1 className="section-title">ABOUT ME</h1>

                    <p className="about-text">
                        I'm a Computer Science student focused on building scalable and reliable web applications.
                        I enjoy transforming ideas into structured systems that are clean, efficient, and practical.
                    </p>
                    <p className="about-text">
                        With a strong foundation in data structures, databases, and problem-solving, I specialize in the MERN stack and full-stack development.
                        I'm particularly interested in backend logic, system design, and writing maintainable code that scales.
                    </p>
                    <p className="about-text">
                        My academic consistency and hands-on project experience reflect my commitment to continuous growth and technical depth.
                    </p>
                    <p className="about-text">
                        Currently, I'm exploring advanced backend architectures, database optimization, and real-world deployment strategies while strengthening
                        my full-stack development skills.
                    </p>

                    <div className="about-tags">
                        <span>MERN Stack</span>
                        <span>SQL & Database Design</span>
                        <span>System Thinking</span>
                        <span>Clean Architecture</span>
                        <span>Problem Solving</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;