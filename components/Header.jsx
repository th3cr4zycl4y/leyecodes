import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { FaBars, FaTimes } from "react-icons/fa";

function Header({ handleNav, navToggle, pageInfo }) {
  let socials = pageInfo.socials;

  return (
    // Header
    <header className="sticky top-0 z-20 flex items-center justify-between max-w-7xl w-full mx-auto px-5 py-3 md:px-5 bg-[#242f40] md:bg-transparent shadow-xl md:shadow-none">
      <div className="w-[20em] h-10">
        {/* Logo image */}
        <img
          src="/images/logo.png"
          alt="Logo Image"
          className="rounded-full md:mb-0 md:rounded-lg object-fit w-[10rem] md:w-[15rem]  object-fit h-10 "
        />
      </div>
      {/* Nav Toggle */}
      <div
        className={
          navToggle
            ? "hidden"
            : " absolute top-14 flex flex-col items-center justify-center h-screen bg-gray-800 w-full left-0 space-y-10 z-22"
        }
        onClick={handleNav}
      >
        <Link href="#about">
          <button className="heroButton text-3xl">About</button>
        </Link>

        <Link href="#skills">
          <button className="heroButton text-3xl">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton text-3xl">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="heroButton text-3xl">Contact</button>
        </Link>
      </div>
      {/* Nav Social Link */}
      <div className="hidden md:block">
        {socials.map((item, i) => (
          <SocialIcon
            url={item}
            key={i}
            bgColor="transparent"
            fgColor="#3CA7CB"
          />
        ))}
      </div>
      <div
        className="md:hidden text-3xl text-[#3CA7CB] cursor-pointer "
        onClick={handleNav}
      >
        {navToggle ? <FaBars /> : <FaTimes />}
      </div>
    </header>
  );
}

export default Header;
