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
                            <span>Express.js</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/smart-project-management.git" target="_blank">GitHub</a>
                            <a href="https://smart-project-management-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects