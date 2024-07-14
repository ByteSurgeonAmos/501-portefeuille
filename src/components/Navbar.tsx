import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[8%] flex items-center  blur-bg   fixed top-0 z-10 justify-between border-b  border-b-red-500  p-3">
        <div className=" text-2xl font-bold">
          ByteSurgeon<span className="text-red-500">Amos</span>
        </div>
        <div className="sm:hidden block">
          <Image src="/hamburger.svg" alt="hamburger" width={50} height={50} />
        </div>
        <div className=" hidden sm:flex gap-8 pr-3 text-lg font-bold">
          <Link href="#home">
            <div className="">HOME</div>
          </Link>
          <Link href="#about">
            <div className="">ABOUT</div>
          </Link>
          <Link href="#skills">
            <div className="">SKILLS</div>
          </Link>
          <Link href="#projects">
            <div className="">PROJECTS</div>
          </Link>
          <Link href="#contact">
            <div className="">CONTACT</div>
          </Link>
          <div className="">RESUME</div>
        </div>
      </div>
    </div>
  );
};
