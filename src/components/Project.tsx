import React from "react";
import Image from "next/image";
const Project = ({
  name,
  description,
  nature,
  tech,
  link,
}: {
  name: string;
  description: string;
  nature: boolean;
  tech: string;
  link: string;
}) => {
  return (
    <div>
      <div className=" border rounded-xl p-3 min-h-[11rem] hover:bg-red-900">
        <div className=" mt-3 flex justify-between ">
          <div className=" flex text-red-500  items-center ml-3 font-bold">
            <span>{name}</span>
          </div>
          <div className=" flex ">
            <a href={link} target="__blank" className="flex">
              {nature ? (
                <div className=" mt-3 border  border-red-500 rounded p-1 text-red-500 h-fit">
                  Private
                </div>
              ) : (
                <div className=" mt-3 border   rounded p-1 text-white h-fit">
                  Public
                </div>
              )}{" "}
              <Image
                src="/github.svg"
                alt="github-icon"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className=" h-[40%] ml-3">{description}</div>
        <div className=" ml-3 h-[20%] mt-3 opacity-50">{tech}</div>
      </div>
    </div>
  );
};

export default Project;
