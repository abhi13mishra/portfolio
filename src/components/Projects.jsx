import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <h1 className="heading">My Projects</h1>

      <div className="grid">
        {projects.map((p, i) => (
          <motion.div key={i} className="card">
            <img src={p.image} alt={p.title} className="project-img" />

            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <a href={p.github} target="_blank">
              <button className="primary">GitHub</button>
            </a>

            <a href={p.live} target="_blank">
              <button className="primary">Live</button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;