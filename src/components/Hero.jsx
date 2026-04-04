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
                            href="/RESUME 1 (PHOTO).pdf"
                            download
                            target="_blank"
                            className="button-primary"
                        > 
                            <FiDownload className="btn-icon" />
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
                            href="https://www.linkedin.com/in/reddypally-nishal-reddy-8835b0370"
                            target="_blank"
                            className="button-primary"
                        > <FaLinkedin className="btn-icon" />
                            LinkedIn
                        </a>
                    </div>
                    <p className="hero-statement">
                            Crafting scalable web applications with clean architecture and real-world impact.<br/>
                            Focused on building efficient backend systems and responsive user interfaces.<br/>
                            Passionate about solving real-world problems through optimized solutions. <br/>
                            Continuously learning and improving to build reliable and high-performance applications.
                        
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
                        <img src="IMAGE 1.jpeg"  className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero