import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import "../App.css";

function Trainings() {
    return (
        <section id="trainings">
            <div className="section-wrapper">
                <div className="section-container">
                    <h1 className="section-title">TRAININGS & CERTIFICATIONS</h1>

                    <div className="glass project-card">
                        <h2 className="project-title">Cambridge English Empower C1 Level Course</h2>
                        <p className="project-description">
                            Completed advanced English proficiency training from Cambridge (Oct 2023 - Jan 2024).
                        </p>
                        <div className="tech-stack">
                            <span>English Proficiency</span>
                            <span>Communication</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1vcic4H-icd9H3Xr5_X8ibwcjuLtO2pPg/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 1.pdf" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Web Design Workshop</h2>
                        <p className="project-description">
                            Participated in web development and design workshop (Mar 2024).
                        </p>
                        <div className="tech-stack">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Web Design</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1tEllEQdxYoZVvavS0_q9shEw1691umS2/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 2.pdf" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Hackathon Participation</h2>
                        <p className="project-description">
                            Participated in a hackathon event (Feb 2024) gaining real-time problem-solving experience.
                        </p>
                        <div className="tech-stack">
                            <span>Problem Solving</span>
                            <span>Team Work</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1mNL3Y9-LhsAB9OoPnZbvm5ipVWa7v4u5/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 3.pdf" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">C and Java Course Completion</h2>
                        <p className="project-description">
                            Successfully completed foundational programming courses in C and Java (Jun 2023 - Aug 2023).
                        </p>
                        <div className="tech-stack">
                            <span>C</span>
                            <span>Java</span>
                            <span>Programming</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1t9CYazxaahczG4-chqkahFjRrgeF-ydZ/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 4.pdf" download><FaDownload /> Download</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Trainings