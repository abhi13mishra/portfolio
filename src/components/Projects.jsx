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
            <div className="des">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

            </div>
            <div className="buttonDiv">
              <a href={p.github} target="_blank">
                <button className="github">GitHub</button>
              </a>

              <a href={p.live} target="_blank">
                <button className="live">Live</button>
              </a>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;