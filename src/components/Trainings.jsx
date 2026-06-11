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
                            <a href="https://drive.google.com/file/d/1gR-EczYsBQx39PCqGZwACyy-Umc3JpnX/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 1.jpg" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Web Design and Development Workshop</h2>
                        <p className="project-description">
                            Participated in Web Design Workshop (Mar 2024).
                        </p>
                        <div className="tech-stack">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            <span>Web Design</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1kXq2kyFZbmAlfFBbVEDsKSKiUwI8pJqX/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 2.jpg" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">Hackathon Participant</h2>
                        <p className="project-description">
                            Participated in a hackathon event (Feb 2024) gaining real-time problem-solving experience.
                        </p>
                        <div className="tech-stack">
                            <span>Problem Solving</span>
                            <span>Team Work</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1KqK-HnX7k216hEBtG16tyneC4jIcC2Fw/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 3.jpg" download><FaDownload /> Download</a>
                        </div>
                    </div>

                    <div className="glass project-card">
                        <h2 className="project-title">C and Java Programming Course</h2>
                        <p className="project-description">
                            Successfully completed foundational programming courses in C and Java (Jun 2023 - Aug 2023).
                        </p>
                        <div className="tech-stack">
                            <span>C</span>
                            <span>Java</span>
                        </div>
                        <div className="project-buttons">
                            <a href="https://drive.google.com/file/d/1n6CsvjiwE4k-hRtK7m7KNEv7cJJJrE1s/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> View Certificate</a>
                            <a href="/CERTIFICATE 4.jpg" download><FaDownload /> Download</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Trainings