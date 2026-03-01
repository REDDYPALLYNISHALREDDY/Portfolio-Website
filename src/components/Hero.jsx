import "../App.css";
import { useEffect, useState } from "react";
import {FiDownload} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {

    const roles = [
        "Aspiring Software Developer",
        "MERN Stack Enthusiast",
        "Problem Solver",
        "Tech Explorer"
    ];

    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const  typingSpeed = 80;
        const deletingSpeed = 40;
        const delayBetweenRoles = 1500;

        let timeout;

        if (charIndex < roles[roleIndex].length) {
            timeout = setTimeout(() => {
                setText(prev => prev + roles[roleIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            }, typingSpeed);
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
                            href="/RESUME 2 (PHOTO).pdf"
                            download
                            className="button-primary"
                        > <FiDownload className="btn-icon" />
                            Download Resume
                        </a>

                        <a
                            href="https://github.com/REDDYPALLYNISHALREDDY"
                            target="_blank"
                            className="button-primary"
                        > <FaGithub className="btn-icon" />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/NISHAL REDDY REDDYPALLY"
                            target="_blank"
                            className="button-primary"
                        > <FaLinkedin className="btn-icon" />
                            LinkedIn
                        </a>
                    </div>
                    <p className="hero-statement">
                        Crafting scalable web experiences with clean architecture and real-world impact.
                    </p>
                    <div className="hero-stats">
                        <div className="stat-card">2+ Projects</div>
                        <div className="stat-card">8.78 CGPA</div>
                        <div className="stat-card">MERN Stack</div>
                        <div className="stat-card">Quick Learner</div>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="photo-wrapper">
                        <img src="IMAGE5.jpeg"  className="hero-img" />
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default Hero