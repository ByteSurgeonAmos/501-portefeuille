"use client";
import React from "react";
import Project from "@/components/Project";
import { data } from "@/utils/501";
const Projects = () => {
  return (
    <div className="sm:mt-[12%] mt-[20%]">
      <p className="text-center text-2xl font-semibold">Some of my projects</p>
      <div className="  gap-5 mt-[1%] p-3 sm:pl-[3rem] flex flex-col sm:grid sm:grid-cols-3 ">
        {data.map((project, index) => (
          <Project
            name={project.project}
            description={project.description}
            nature={project.private}
            tech={project.technologies_used}
            link={project.link}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
