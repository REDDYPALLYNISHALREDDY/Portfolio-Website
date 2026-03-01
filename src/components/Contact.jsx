import "../App.css";
import {FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
            () => {
                alert("Message sent successfully 🚀");
            },
            (error) => {
                alert("Failed to send message ❌");
                console.log(error.text);
            }
        );

        e.target.reset();
    }
    return (
        <section id="contact" className="contact-section">
            <h1 className="section-title">CONTACT</h1>
            
            <div className="contact-container glass">
                <p className="contact-text">
                    I'm open to internships, collaborations, and exciting tech discussions.
                    Let's build something impactful.
                </p>

                <div className="contact-info">
                    <a href="mailto:nishalreddyreddypally724@gmail.com" className="contact-btn"><FaEnvelope /> Email</a>
                    <a href="https://github.com/REDDYPALLYNISHALREDDY" target="_blank" className="contact-btn"><FaGithub /> GitHub</a>
                    <a href="https://linkedin.com/in/NISHALREDDYREDDYPALLY" target="_blank" className="contact-btn"><FaLinkedin /> LinkedIn</a>
                </div>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input type="text" name="from_name" placeholder="Your Name" required />
                    <input type="email" name="from_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact