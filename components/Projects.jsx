import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { urlFor } from "../lib/sanity";

function Projects({ projects }) {
  return (
    <div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-col items-center justify-center h-full mx-auto max-w-7xl"
      >
        <h3 className="uppercase tracking-[10px] text-gray-500 pt-16 md:py-10 text-2xl">
          Projects
        </h3>

        <div className=" w-full  flex items-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-5 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#3CA7CB]">
          {projects.map((project, index) => (
            <div
              className="w-full flex-shrink-0 snap-center flex  flex-col space-y-5 mx-auto   "
              key={index}
            >
              <div className="flex h-full w-full justify-center items-center p-8">
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="hidden md:block"
                >
                  <Image
                    className="h-[20rem] w-full grayscale hover:grayscale-0 hover:z-20 "
                    src={urlFor(project.projectImage).url()}
                    alt="Project Image"
                    height="350"
                    width="550"
                    layouts="responsive"
                  />
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-full space-y-10 md:relative right-24 md:w-[50%] md:space-y-3 flex md:justify-center  flex-col items-center md:items-end "
                >
                  <p className="text-[#3CA7CB] font-mono text-md">
                    Featured Project
                  </p>
                  <h3 className="text-3xl text-gray-400">{project.name}</h3>
                  <div>
                    <p className="p-10 bg-[#242f40] text-gray-400 shadow-lg border md:text-right text-center border-gray-400 rounded-lg">
                      {project.projectInfo}
                    </p>
                  </div>
                  <ul className="flex justify-end text-gray-300 space-x-3">
                    {project.projectTech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="text-3xl space-x-3 flex justify-end text-gray-300 ">
                    <Link href={project.gitHub}>
                      <a>
                        {" "}
                        <FiGithub className="cursor-pointer z-20" />
                      </a>
                    </Link>
                    <Link href={project.liveLink}>
                      <a>
                        <FiExternalLink className="cursor-pointer z-20" />
                      </a>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
