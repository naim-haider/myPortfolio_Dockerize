import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                className="mb-6 rounded"
                width={150}
                height={150}
                src={project.image}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="flex">
                <h6 className="mb-2 font-semibold">{project.title}</h6>{" "}
                <a
                  className="pl-3 mt-1 text-purple-900 text-lg"
                  href={project.vercel_url}
                >
                  <TbWorld />
                </a>
                <a
                  className="pl-3 mt-1 text-purple-900 text-lg"
                  href={project.git_url}
                >
                  <FaGithub />
                </a>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
