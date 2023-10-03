import React from "react";
import DynamicText from "@/utils/DynamicText";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div id="home">
      <div className=" sm:flex   mx-auto sm:mt-[10%] mt-[18%] ">
        <div className=" hidden sm:flex   mt-[10%] font-extrabold bg-slate-950 clip text-9xl border-t border-red-500 sm:w-fit sm:p-[5rem] sm:ml-4  ">
          501
        </div>
        <div className="sm:ml-[4rem] sm:block flex justify-center mt-[10%] text-2xl overflow-clip sm:overflow-x-auto">
          <DynamicText />
        </div>
        <div className="mt-[20%] gap-0 sm:block flex justify-center">
          <Link href="#contact">
            <button className=" border border-red-500 p-3 px-5 rounded hover:bg-gray-900 hover:border-none">
              Get in touch
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex justify-end  pr-[3rem] mt-[1rem]">
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
