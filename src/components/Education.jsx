import "../App.css";

function Education() {
    return (
        <section id="education" className="education-section">
            <div className="education-container">
                <h1 className="section-title">EDUCATION</h1>

                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="glass timeline-content">
                            <h2>B.Tech - Computer Science & Engineering</h2>
                            <p>Malla Reddy College of Engineering & Technology</p>
                            <p className="edu-sub">Hyderabad, Telangana</p>
                            <p className="edu-sub">2023 - Present</p>
                            <span className="highlight">CGPA: 8.73</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="glass timeline-content">
                            <h2>Senior Secondary (Class XII)</h2>
                            <p>Telangana State Board of Intermediate Education</p>
                            <p className="edu-sub">Hyderabad, Telangana</p>
                            <p className="edu-sub">2021 - 2023</p>
                            <span className="highlight">Percentage: 92.3</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="glass timeline-content">
                            <h2>SSC (Class X)</h2>
                            <p>Celestial High School</p>
                            <p className="edu-sub">Siddipet, Telangana</p>
                            <p className="edu-sub">2020</p>
                            <span className="highlight">CGPA: 10.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education