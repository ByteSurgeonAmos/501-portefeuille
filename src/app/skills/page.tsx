import React from "react";

const Skills = () => {
  return (
    <div className=" ">
      <div className="mt-[12%] text-center relative text-2xl font-semibold flex justify-center ">
        <span className="relative flex flex-col">
          <p>My skill set</p>
          <span className="border-red-500 border-b-2 absolute w-full animate-wiggle mt-8"></span>
        </span>
      </div>
      <div className="flex  flex-col sm:flex-row mt-[10%] sm:justify-around justify-center">
        <img
          src="https://skillicons.dev/icons?i=git,github,githubactions,gitlab,vscode,stackoverflow,figma,materialui,emacs,vim,linux,postman&perline=4"
          alt="icons"
        />
        <div className="">
          <img
            src="https://skillicons.dev/icons?i=appwrite,firebase,mongodb,mysql,bootstrap,css,tailwind,sass,express,nodejs,flask,py,js,react,nextjs,redux,r,cpp,svelte,html&perline=5"
            alt="icons"
          />
        </div>
        <div className="">
          <img
            src="https://skillicons.dev/icons?i=docker,bash,ps,netlify,vercel,webpack,arduino,autocad,matlab&perline=3"
            alt="icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
