import { skills } from "../data/skills";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Skills() {

  const iconMap = {
    html: <FaHtml5 color="#e34c26" />,
    css: <FaCss3Alt color="#264de4" />,
    js: <FaJs color="#f0db4f" />,
    react: <FaReact color="#61dbfb" />,
    node: <FaNodeJs color="#3c873a" />,
    mongo: <SiMongodb color="#4db33d" />,
    git: <FaGitAlt color="#f1502f" />,
    github: <FaGithub color="#000" />,
    code: <FaCode color="#0078d7" /> // VS Code fallback (error-free)
  };

  return (
    <section id="skills">
      <h1 className="heading">Tech Stack & Tools</h1>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
          >
            <div className="icon">{iconMap[s.icon]}</div>
            <h3>{s.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;