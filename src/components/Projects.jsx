import "../App.css";

function Projects() {
    return (
        <section id="projects">
            <div className="section-wrapper">
                <div className="section-container">
                    <h1 className="section-title">PROJECTS</h1>

                    <div className="glass project-card">
                        <h2 className="project-title">AI-Powered Government Welfare Scheme Assistant</h2>

                        <p className="project-description">
                            Developed a full-stack AI-powered platform that simplifies government welfare scheme discovery by 
                            providing personalized recommendations based on user needs and eligibility criteria.
                        </p>
                        <p className="project-description">
                            Implemented a Retrieval-Augmented Generation (RAG) pipeline using Qdrant, 
                            Sentence Transformers and a locally hosted LLM to deliver context-aware answers grounded in scheme records and uploaded documents.
                        </p>
                        <p className="project-description">
                            Engineered RESTful APIs with FastAPI and PostgreSQL, integrating JWT authentication, role-based access control, 
                            document management and multilingual assistance.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Python</span>
                            <span>FastAPI</span>
                            <span>PostgreSQL</span>
                            <span>Qdrant</span>
                            <span>LangChain</span>
                            <span>Hugging Face</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/CIVINEX---Government-Welfare-Scheme-Assistant.git" target="_blank">GitHub</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Smart Project & Team Managment System</h2>

                        <p className="project-description">
                            Developed a full-stack MERN Project and Team Management Platform with secure JWT authentication,
                            role-based access control, and RESTful APIs using Express.js and MongoDB.
                        </p>
                        <p className="project-description">
                            Built modules for project management, task assignment, team collaboration, and progress tracking, along
                            with a responsive user interface to improve productivity across devices.
                        </p>
                        <p className="project-description">
                            Utilized Git & GitHub for version control and collaborative development while designing scalable backend
                            services for efficient project and task management.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>REST API's</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/smart-project-management.git" target="_blank">GitHub</a>
                            <a href="https://smart-project-management-hazel.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Full Stack E-Commerce Platform</h2>

                        <p className="project-description">
                            Developed a full-stack MERN E-Commerce Platform with secure JWT authentication, role-based access
                            control, and RESTful APIs using Express.js and MongoDB for efficient data management
                        </p>
                        <p className="project-description">
                            Built an Admin Dashboard to manage products, categories, users, and orders with complete CRUD operations, 
                            while implementing shopping cart, wishlist, product search, and responsive UI
                        </p>
                        <p className="project=description">
                            Deployed the frontend on Vercel and backend on Render with MongoDB Atlas, and utilized Git & GitHub
                            for version control and collaborative development.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>JWT</span>
                            <span>REST API's</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/E-Commerce-Platform.git" target="_blank">GitHub</a>
                            <a href="https://e-commerce-platform-kappa-azure.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Real Time Chat Application</h2>

                        <p className="project-description">
                            Developed a full-stack real-time chat application with secure JWT authentication, 
                            RESTful APIs, and Socket.IO for instant bi-directional communication between users.
                        </p>
                        <p className="project-description">
                            Built responsive chat interfaces with real-time messaging, 
                            user conversations, online/offline status, and efficient message management using React and MySQL.
                        </p>
                        <p className="project-description">
                            Designed scalable backend services with Spring Boot and integrated WebSocket-based communication(STOMP) for low-latency messaging, 
                            while utilizing Git & GitHub for version control and collaborative development.
                        </p>

                        <div className="tech-stack">
                            <span>React</span>
                            <span>Spring Boot</span>
                            <span>MySQL</span>
                            <span>Socket API</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://github.com/REDDYPALLYNISHALREDDY/SYNORA-FRONTEND.git" target="_blank">GitHub</a>
                            <a href="https://orvenchat.vercel.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects