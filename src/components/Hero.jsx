import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1>Abhishek Mishra</h1>
        <h2>Full Stack Developer</h2>

        <p>
          Proficient Fullstack Developer with comprehensive expertise in modern web technologies, including HTML, CSS, JavaScript, React, Node.js, and Express. Leverages robust problem-solving skills and clear communication to architect and deliver end-to-end, high-performance web solutions.
        </p>

        <div className="btns">
          <a href="#contact">
            <button className="primary">Get In Touch</button>
          </a>

          <a href="/Abhishek_Mishra_Resume.pdf" download className="secondary">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div className="hero-right">
        <img src="/profile.jpeg" alt="profile" />
      </motion.div>

    </section>
  );
}

export default Hero;