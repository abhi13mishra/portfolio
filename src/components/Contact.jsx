import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contact Me</h1>

      <div className="contact-grid">

        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div>
            <p className="value">abhishek.mishra.fsd@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <div>
            <p className="value">9996160281</p>
          </div>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div>
            <a
              href="https://www.linkedin.com/in/abhishek-mishra-987a00259/"
              target="_blank"
              rel="noopener noreferrer"
              className="value"
            >
              Profile
            </a>
          </div>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <div>
            <a href="https://github.com/abhi13mishra"
              target="_blank"
              rel="noopener noreferrer"
              className="value"
            >
              Repository
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;