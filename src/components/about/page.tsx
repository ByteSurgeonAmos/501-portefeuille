import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <div className=" gap-[6rem]" id="about">
      <p className="text-center mt-[15%] text-xl font-semibold">
        What i&apos;m about
      </p>
      <div className="flex flex-col sm:flex-row justify-around">
        <div className=" w-fit  mt-[10%] pl-[4rem] ">
          <img
            loading="lazy"
            className="hover:transform hover:scale-110 transition-transform duration-300"
            width="350"
            src="https://cloud.appwrite.io/v1/cards/cloud?userId=64fde442eed19a7c2c44"
            alt="Appwrite Cloud Card"
          />
        </div>
        <div className=" mt-[10%] border rounded bg-white  w-fit ">
          <Image
            src="/new-cert.jpg"
            alt="arduinocert"
            className="p-5 hover:transform hover:scale-110 transition-transform duration-300"
            loading="lazy"
            width={300}
            height={200}
          />
        </div>
      </div>
      <div className="mt-[10%] w-full text-center flex flex-wrap justify-center">
        <p className="w-[50%] text-xl">
          I&apos;m<span className="text-red-500"> Amos Wachira</span> , a
          passionate
          <span className="text-red-500"> Full Stack Developer,</span>
          <span className="text-red-500"> Biomedical Engineer.</span> and a{" "}
          <span className="text-red-500"> Blockchain Developer.</span> I strive
          to merge my coding skills and biomedical knowledge to innovate and
          improve healthcare through technology. With a commitment to
          excellence, I&apos;m driven to make a lasting impact in both
          industries.
        </p>
      </div>
    </div>
  );
};

export default About;
