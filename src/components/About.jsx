import "../App.css";

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="glass about-card">
                    <h1 className="section-title">ABOUT ME</h1>

                    <p className="about-text">
                        I'm a Computer Science student and Full-Stack Developer passionate about engineering scalable, secure, and reliable web applications. 
                        I enjoy taking ideas from concept to implementation and transforming them into well-structured software that solves real-world problems.
                    </p>
                    <p className="about-text">
                        My core strength lies in Software Development, full-stack development with the MERN stack, with a particular interest in backend engineering, API design, database architecture, authentication, and real-time systems. 
                        I focus on writing clean, maintainable code and designing systems that remain reliable as they grow.
                    </p>
                    <p className="about-text">
                        Through hands-on projects, I continuously strengthen my problem-solving and software engineering skills by working with real development challenges, 
                        from designing efficient backend services to building responsive and intuitive user experiences.
                    </p>
                    <p className="about-text">
                        I'm driven by curiosity, continuous learning, and the goal of becoming a strong software engineer capable of building impactful products, collaborating effectively with teams, and solving complex technical problems 
                        with thoughtful engineering.
                    </p>

                    <div className="about-tags">
                        <span>Software Development</span>
                        <span>Full-Stack Development</span>
                        <span>Backend Engineering</span>
                        <span>System Design</span>
                        <span>DevOps</span>
                        <span>Database Architecture</span>
                        <span>Version Control</span>
                        <span>Problem Solving</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;