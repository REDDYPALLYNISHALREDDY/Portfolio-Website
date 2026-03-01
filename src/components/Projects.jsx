import "../App.css";

function Projects() {
    return (
        <section id="projects">
            <div className="section-wrapper">
                <div className="section-container">
                    <h1 className="section-title">PROJECTS</h1>

                    <div className="glass project-card">
                        <h2 className="project-title">COLLABX</h2>

                        <p className="project-description">
                            Smart Project and Team Management System  is a centralized digital platform designed to streamline
                            project planning, team coordination, and performance tracking within organizations. It allows administrators and team
                            leaders to create projects, assign tasks, set deadlines, monitor progress through interactive dashboards, and manage roles
                            with secure access controls, while team members can collaborate using real time updates, file sharing, comments, and
                            notifications. COLLABX improves transparency, accountability, and productivity by keeping all project data in one place,
                            reducing communication gaps, and enabling data driven decision making through reports and analytics. The system can
                            be implemented as a web and mobile application using modern technologies such as cloud databases, REST APIs, and AI
                            powered insights to automate task prioritization and performance analysis, making it suitable for educational institutions,
                            startups, enterprises, and even government initiatives.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                            <span>Express</span>
                        </div>
                        <div className="project-buttons">
                            <a href="#" target="_blank">GitHub</a>
                            <a href="#" target="_blank">Live Demo</a>
                        </div>
                    </div>
                    <div className="glass project-card">
                        <h2 className="project-title">PORTFOLIO WEBSITE</h2>
                        <p className="project-description">
                            A modern, glassmorphism-inspired portfolio website built using React and pure CSS. The site showcases my education, technical skills, and full-stack projects through a clean, responsive, and visually engaging interface. 
                            Designed with smooth animations and structured layouts, it reflects my focus on clean architecture, user experience, and scalable frontend development.
                        </p>
                        <div className="tech-stack">
                            <span>React</span>
                            <span>CSS</span>
                            <span>Responsive Design</span>
                        </div>

                        <div className="project-buttons">
                            <a href="#" target="_blank">GitHub</a>
                            <a href="#" target="_blank">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects