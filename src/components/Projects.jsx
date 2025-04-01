import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Proyectos
      </motion.h2>
      {Object.entries(PROJECTS).map(([category, projects]) => (
        <div key={category} className="mb-12">
          {/* TÍTULO DE LA CATEGORÍA */}
          <h3 className="text-3xl font-bold mt-10 mb-4 capitalize">
            {category === "frontend" && "🌐 Desarrollo Frontend"}
            {category === "wordpress" && "🖥️ WordPress & CMS"}
            {category === "uxui" && "🎨 UX/UI & Diseño"}
          </h3>
          <hr className="border-stone-700 mb-6" />

          {/* LISTADO DE PROYECTOS */}
          <div className="mt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="mb-8 flex flex-wrap lg:justify-center"
              >
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{ duration: 1 }}
                  className="w-full lg:w-1/4"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={project.image}
                      width={250}
                      height={250}
                      alt={project.title}
                      className="mb-6 rounded"
                    />
                  </a>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="w-full max-w-xl lg:w-3/4"
                >
                  <h3 className="mb-2 font-semibold text-xl">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="mb-2 text-stone-400">{project.description}</p>
                  <div>
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
