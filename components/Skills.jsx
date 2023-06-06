import { motion } from "framer-motion";
import { BiFastForward } from "react-icons/bi";
import { FaMobile } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

function About() {
  return (
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
      className="flex flex-col items-center  h-[100vh] my-10 mx-auto max-w-7xl "
    >
      <h3 className="uppercase tracking-[10px] text-gray-500 py-16 md:py-10 text-2xl">
        My Skills
      </h3>
      <motion.div className="flex flex-col items-center justify-center md:h-full  max-w-7xl ">
        <div className="items-con ">
          <div className="skillDesc">
            <BiFastForward className="iconstyle" />
            <p>
              Developing blazing fast web application for seamless user
              interaction.
            </p>
          </div>
          <div className="skillDesc">
            <FaMobile className="iconstyle" />
            <p>
              Mobile-first, responsive design layout for all devices is a top
              priority.
            </p>
          </div>
          <div className="skillDesc">
            <FaGraduationCap className="iconstyle" />
            <p>
              Constantly continues to learn new technologies and keeping
              up-to-date with the freshest trends.
            </p>
          </div>
        </div>

        <div className="py-9 flex md:space-x-32 flex-col md:flex-row space-y-10 md:space-y-0 w-[80%] justify-evenly">
          <div className=" text-gray-500 text-center">
            <h2 className="text-3xl  text-[#3CA7CB] font-bold tracking-widest">
              Front-End
            </h2>
            <ul className="text-2xl pt-4 tracking-wider">
              <li>HTML</li>
              <li>CSS 3</li>
              <li>Sass</li>
              <li>Reactjs</li>
              <li>Nextjs</li>
              <li>TailWindcss</li>
            </ul>
          </div>
          <div className=" text-gray-500 text-center">
            <h2 className="text-3xl  text-[#3CA7CB] font-bold tracking-widest">
              Back-End
            </h2>
            <ul className="text-2xl pt-4 tracking-wider">
              <li>NodeJs</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Sanity.io</li>
            </ul>
          </div>
          <div className=" text-gray-500 text-center">
            <h2 className="text-3xl  text-[#3CA7CB] font-bold tracking-widest">
              Others
            </h2>
            <ul className="text-2xl pt-4 tracking-wider">
              <li>Linux</li>
              <li>Python</li>
              <li>Git</li>
              <li>VsCode</li>
              <li>Networking</li>
              <li>Ethical Hacking</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
