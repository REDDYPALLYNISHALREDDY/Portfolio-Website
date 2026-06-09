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
                            Collabx is a centralized digital platform designed to streamline
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
                            <span>Express.js</span>
                            <span>MongoDB</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/smart-project-management.git" target="_blank">GitHub</a>
                            <a href="https://smart-project-management-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">INTERVIO</h2>

                        <p className="project-description">
                            INTERVIO is an intelligent interview preparation platform that utilizes AI-driven evaluation techniques to simulate real-world technical and HR interviews. 
                            The system provides personalized feedback, performance analysis, interview history tracking, and skill assessment reports to help users continuously improve their interview readiness. 
                            Through interactive mock interview sessions and detailed analytics dashboards, candidates can monitor progress, identify strengths and weaknesses, and build confidence before actual interviews. 
                            INTERVIO streamlines the interview preparation process by offering a structured and data-driven learning experience for students and job seekers.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Spring Boot</span>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/AI-MOCK-INTERVIEW-PLATFORM.git" target="_blank">GitHub</a>
                            <a href="https://ai-mock-interview-platform-mu-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects