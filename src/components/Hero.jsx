import "../App.css";
import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {

    const roles = [
        "Aspiring Software Developer",
        "Web Developer",
        "Java Developer",
        "Android Developer",
        "MERN Stack Enthusiast",
        "Problem Solver",
        "Tech Explorer"
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const  typingSpeed = 60;
        const deletingSpeed = 40;
        const delayBetweenRoles = 2000;

        let timeout;

        if (charIndex < roles[roleIndex].length) {
            timeout = setTimeout(() => {
                setText(prev => prev + roles[roleIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            }, typingSpeed,deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText("");
                setCharIndex(0);
                setRoleIndex(prev => (prev + 1) % roles.length);
            }, delayBetweenRoles);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, roleIndex]);

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <h1>
                        REDDYPALLY <span className="accent">NISHAL REDDY</span>
                    </h1>

                    <h3 className="degree">B.Tech Computer Science Engineering Student</h3>

                    <h2 className="animated-role">{text}</h2>

                    <div className="hero-buttons">
                        <a
                            href="/NISHAL's RESUME 1.pdf"
                            download
                            className="button-primary"
                        > 
                            <FiDownload className="btn-icon" />
                            RESUME 1
                        </a>

                        <a
                            href="/NISHAL's RESUME.pdf"
                            download
                            className="button-primary"
                        >
                            <FiDownload className="btn-icon" />
                            RESUME 2
                        </a>

                        <a
                            href="https://github.com/REDDYPALLYNISHALREDDY"
                            target="_blank"
                            className="button-primary"
                        > <FaGithub className="btn-icon" />
                            GITHUB
                        </a>

                        <a
                            href="https://www.linkedin.com/in/reddypally-nishal-reddy-8835b0370"
                            target="_blank"
                            className="button-primary"
                        > <FaLinkedin className="btn-icon" />
                            LINKEDIN
                        </a>
                    </div>
                    <p className="hero-statement">
                        — Full-Stack Developer focused on building scalable, secure, and high-performance web applications 
                        using the MERN stack. 
                    </p>
                    <p className="hero-statement">
                        — Experienced in developing RESTful APIs, authentication systems, real-time applications, and 
                        responsive user interfaces with a strong focus on clean architecture and maintainable code.
                    </p>
                    <p className="hero-statement">
                        — Proven ability to turn real-world requirements into practical, production-ready solutions 
                        while continuously improving performance, reliability, and user experience.
                    </p>
                    <p className="hero-statement">
                        — Passionate about solving complex problems, learning modern technologies, and 
                        building software that creates meaningful impact.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-card">3+ Projects</div>
                        <div className="stat-card">8.73 CGPA</div>
                        <div className="stat-card">MERN Stack</div>
                        <div className="stat-card">Quick Learner</div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="photo-wrapper">
                        <img src="NISHAL's PHOTO.jpg"  className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero