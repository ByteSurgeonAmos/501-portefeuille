import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[8%] flex items-center  blur-bg   fixed top-0 z-10 justify-between border-b  border-b-red-500  p-3">
        <div className=" text-2xl font-bold">
          Amos D<span className="text-red-500">eV</span>
        </div>
        <div className="sm:hidden block">
          <Image src="/hamburger.svg" alt="hamburger" width={50} height={50} />
        </div>
        <div className=" hidden sm:flex gap-8 pr-3 text-lg font-bold">
          <div className="">HOME</div>
          <div className="">ABOUT</div>
          <div className="">SKILLS</div>
          <div className="">PROJECTS</div>
          <div className="">CONTACT</div>
          <div className="">VITAE</div>
        </div>
      </div>
    </div>
  );
};
