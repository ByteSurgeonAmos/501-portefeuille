import React from "react";
import DynamicText from "@/utils/DynamicText";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <div className=" sm:flex   mx-auto ">
        <div className=" hidden sm:flex   mt-[10%] font-extrabold bg-slate-950 clip text-9xl border-t border-red-500 sm:w-fit sm:p-[5rem] sm:ml-4  ">
          501
        </div>
        <div className="ml-[4rem] mt-[10%] text-2xl overflow-clip sm:overflow-x-auto">
          <DynamicText />
        </div>
        <div className="mt-[20%] gap-0 ">
          <button className=" border border-red-500 p-3 px-5 rounded hover:bg-gray-900 hover:border-none">
            Get in touch
          </button>
        </div>
      </div>
      <div className=" flex justify-end  pr-[3rem]">
        <Image
          src="/undraw-portfolio-2.svg"
          alt="portfolio-img"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Home;
