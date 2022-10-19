import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      `Hi, Am Olabode Olaleye`,
      "I-just-don't-build-website.jsx",
      "I-build-secure-website.jsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 text-center max-w-7xl mx-auto">
      <div>
        <Image
          src="/images/profile.png"
          alt="profile Picture"
          width="230"
          height="230"
          className="rounded-full"
        />
      </div>
      <div className="mx-auto space-y-4 ">
        <h3 className="text-sm tracking-[10px] text-gray-500 relative">
          SOFTWARE ENGINEER
        </h3>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl text-[#3CA7CB]">
          <span>{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>
        <div className="py-5 hidden md:block ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
        <div className="md:hidden ">
          <SocialIcon
            url="https://twitter.com/th3cr4zycl4y"
            bgColor="none"
            fgColor="#3CA7CB"
          />
          <SocialIcon
            url="https://github.com/0l4b0d3"
            bgColor="none"
            fgColor="#3CA7CB"
          />
          <SocialIcon
            url="https://linkedin.com/olabode"
            fgColor="#3CA7CB"
            bgColor="none"
          />
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#3CA7CB]/5 left-0 h-[200px] skew-y-12 -z-20" />
    </div>
  );
}

export default Hero;
