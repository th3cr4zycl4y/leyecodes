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
              className="flex flex-col flex-shrink-0 w-full mx-auto space-y-5 snap-center "
              key={index}
            >
              <div className="flex items-center justify-center w-full h-full p-8">
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
                  <p className="font-bold text-gray-400">
                    {index + 1} / {projects.length}
                  </p>
                  <h3 className="text-3xl text-gray-400">{project.name}</h3>
                  <div>
                    <p className="p-10 bg-[#242f40] text-gray-400 shadow-lg border md:text-right text-center border-gray-400 rounded-lg">
                      {project.projectInfo}
                    </p>
                  </div>
                  <ul className="flex justify-end space-x-3 text-gray-300">
                    {project.projectTech.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex justify-end space-x-3 text-3xl text-gray-300 ">
                    <Link href={project.gitHub}>
                      <a>
                        {" "}
                        <FiGithub className="z-20 cursor-pointer" />
                      </a>
                    </Link>
                    <Link href={project.liveLink}>
                      <a>
                        <FiExternalLink className="z-20 cursor-pointer" />
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
