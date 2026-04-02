import "../App.css";

function Skills() {
    return (
        <section id="skills">
            <div className="section-wrapper">
                <div className="section-container">
                    <h1 className="section-title">TECHNICAL SKILLS</h1>

                    <div className="skills-grid">
                        <div className="glass skill-card">
                            <h3>Programming Languages</h3>
                            <p>C</p>
                            <p>Java</p>
                            <p>Python</p>
                        </div>

                        <div className="glass skill-card">
                            <h3>Web Development</h3>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </div>

                        <div className="glass skill-card">
                            <h3>Databases</h3>
                            <p>SQL (MySQL)</p>
                            <p>MongoDB</p>
                        </div>

                        <div className="glass skill-card">
                            <h3>Tools</h3>
                            <p>Git</p>
                            <p>GitHub</p>
                            <p>VS Code</p>
                        </div>

                        <div className="glass skill-card">
                            <h3>Core Competencies</h3>
                            <p>Data Structures & Algorithms</p>
                            <p>OOP</p>
                            <p>Problem Solving</p>
                            <p>Logical Thinking</p>
                        </div>

                        <div className="glass skill-card">
                            <h3>Core Subjects</h3>
                            <p>Operating Systems</p>
                            <p>Computer Networks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills