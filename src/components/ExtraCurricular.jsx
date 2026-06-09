import "../App.css";
import { FaCode, FaLaptopCode, FaFutbol } from "react-icons/fa";

function ExtraCurricular() {
    return (
        <section id="activities">
            <div className="section-wrapper">
                <div className="section-container">
                    <h1 className="section-title">EXTRA CURRICULAR ACTIVITIES</h1>
                    <div className="skills-grid">
                        <div className="glass skill-card">
                            <FaCode size={30} className="accent" />
                            <h3>Coding</h3>
                            <p>Active participant in coding, improving problem-solving and logical thinking.</p>
                        </div>

                        <div className="glass skill-card">
                            <FaLaptopCode size={30} className="accent" />
                            <h3>Workshops</h3>
                            <p>Attended workshops on Python and Web Development, gaining hands-on experience.</p>
                        </div>

                        <div className="glass skill-card">
                            <FaFutbol size={30} className="accent" />
                            <h3>Sports</h3>
                            <p>Interested in playing cricket and maintaining strong team consistency and discipline.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ExtraCurricular