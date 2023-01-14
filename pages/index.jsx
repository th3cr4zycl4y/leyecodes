import { useState } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "./../components/Projects";
import { sanityClient } from "../lib/sanity.server";
import Image from "next/image";
import Link from "next/link";

const projectQuery = `
   *[_type == "project"]{
    name,
    projectTech,
    projectInfo,
    gitHub,
    liveLink,
    _createdAt,
    projectImage {
    asset {
    _ref
  }
  }
  } | order(_createdAt desc)
  `;

const pageInfoQuery = `
*[_type == "pageInfo"][0]{
  profileName,
  role,
  profilePic{
asset {
  _ref
} },
  phoneNumber,
  email,
  resume {
    asset-> {url}
  },
  Info,
  address,
  socials,
  heroImage{
asset {
  _ref
}
}
}

`;

export default function Home({ project, pageInfo }) {
  const [navToggle, setNavToggle] = useState(true);

  const handleNav = () => {
    setNavToggle((navToggle) => !navToggle);
    console.log(navToggle);
  };

  return (
    <div className=" h-screen overflow-scroll overflow-x-hidden scrollbar scrollbar-thumb-[#3CA7CB] scrollbar-track-gray-700 snap-y">
      <Head>
        <title>
          Portfolio by Olabode Olaleye | Web developer | Ethical hacker
        </title>
        <meta
          name="description"
          content="I am a Cyber Security enthusiast turn Web developer, I'm a person who has high passion for computer security and web development. on a verge of having my OSCP"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header handleNav={handleNav} navToggle={navToggle} pageInfo={pageInfo} />
      {/* Main */}
      <main className="mx-auto max-w-7xl ">
        {/* Hero */}
        <section id="hero">
          <Hero pageInfo={pageInfo} />
        </section>
        {/* About */}
        <section id="about">
          <About pageInfo={pageInfo} />
        </section>
        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>
        {/* Projects */}
        <section id="projects">
          <Projects projects={project} />
        </section>
        {/* Contact */}
        <section id="contact">
          <Contact pageInfo={pageInfo} />
        </section>
      </main>
      <Link href="#hero">
        <footer className="sticky flex items-center justify-center w-full cursor-pointer  bottom-5">
          <div className="w-10 h-10">
            <Image
              className="rounded-full cursor-pointer filter grayscale hover:grayscale-0"
              src="/images/profile.png"
              alt="Picture of the author"
              width="1"
              height="1"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const project = await sanityClient.fetch(projectQuery);

  const pageInfo = await sanityClient.fetch(pageInfoQuery);
  return {
    props: { project, pageInfo },
  };
}
