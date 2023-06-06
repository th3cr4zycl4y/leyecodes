import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../lib/sanity";

function About({ pageInfo }) {
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
      className="flex flex-col items-center h-[100vh]  justify-center max-w-7xl mx-auto "
    >
      <h3 className="  uppercase tracking-[20px] text-gray-500 py-16 md:py-10 text-2xl">
        About
      </h3>
      <div className="flex flex-col items-center justify-center  md:space-x-8 space-y-5 md:flex-row ">
        <motion.div
          initial={{
            x: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="w-52 xl:w-[350px] "
        >
          <Image
            className="flex-shrink-0 rounded-full md:mb-0 md:rounded-lg "
            src={urlFor(pageInfo.profilePic).url()}
            alt="Picture of the author"
            width="1"
            height="1"
            layout="responsive"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="md:w-[50%]  space-y-5 text-center md:text-left px-5"
        >
          <h4 className="text-4xl font-semibold text-[#3CA7CB]">
            Here is a{" "}
            <span className="underline decoration-[#3CA7CB]/50">little</span>{" "}
            about me
          </h4>
          <p className="text-base text-gray-400 md:text-[1.2rem]  w-full tracking-widest">
            {pageInfo.Info}
          </p>

          <button className="text-md rounded-xl border p-4 border-[#3CA7CB] hover:bg-[#3CA7CB] hover:text-gray-600 hover:font-bold tracking-widest text-[#3CA7CB]">
            <a href={pageInfo.resume.asset.url}> Download CV</a>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
