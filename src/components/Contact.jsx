import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contact Me</h1>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <p className="label">Email</p>
            <p className="value">yourrealemail@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <div>
            <p className="label">Phone</p>
            <p className="value">9876543210</p>
          </div>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div>
            <p className="label">LinkedIn</p>
            <a href="#" className="value">Profile</a>
          </div>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <div>
            <p className="label">GitHub</p>
            <a href="#" className="value">Repository</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;