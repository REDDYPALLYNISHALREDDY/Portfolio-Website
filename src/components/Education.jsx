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
                            <p className="edu-sub">2023 - 2027</p>
                            <span className="highlight">CGPA: 8.78 / 10</span>
                            <p className="edu-note">
                                Strong foundation in Data Structures, DBMS and System Design.
                            </p>
                            <div className="course-tags">
                                <span>Data Structures</span>
                                <span>DBMS</span>
                                <span>Operating Systems</span>
                                <span>Computer Networks</span>
                                <span>OOPS</span>
                            </div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="glass timeline-content">
                            <h2>Intermediate (12th Grade)</h2>
                            <p>Sri Chaitanya Junior College</p>
                            <p className="edu-sub">Hyderabad, Telangana</p>
                            <p className="edu-sub">2021 - 2023</p>
                            <span className="highlight">Marks: 923</span>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="glass timeline-content">
                            <h2>SSC (10th Grade)</h2>
                            <p>Celestial High School</p>
                            <p className="edu-sub">Siddipet, Telangana</p>
                            <p className="edu-sub">2020</p>
                            <span className="highlight">CGPA: 10.0 / 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education