import Image from "next/image";
import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-[20%]" id="contact">
      <div className=" flex justify-center text-2xl font-bold  w-full">
        <span className="border-b border-red-500"> Reach out! </span>
      </div>
      <div className="sm:flex justify-between p-5 mt-[5%] ">
        <div className="">
          <p className=" text-xl font-semibold">
            Let &apos;s keep the conversation flowing!
          </p>
          <p className=" text-xl font-semibold mt-5">Get in touch today</p>
          <div className=" flex sm:block justify-evenly">
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/in/amos-wachira-27901b244/">
                <Image
                  className="mt-5"
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={30}
                  height={30}
                />
              </Link>

              <p className="mt-7 text-red-500 hidden sm:block">--- LinkedIn</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://twitter.com/Amo15310">
                <Image
                  className="mt-5"
                  src="/twitter.svg"
                  alt="twitter"
                  width={30}
                  height={30}
                />
              </Link>

              <p className="mt-7 text-red-500 hidden sm:block">--- X</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com/AMO15310">
                <Image
                  className="mt-5"
                  src="/github-1.svg"
                  alt="github"
                  width={30}
                  height={30}
                />
              </Link>

              <p className="mt-7 text-red-500 hidden sm:block">--- Github</p>
            </div>
            <div className="flex gap-4 mb-3">
              <Image
                className="mt-5"
                src="/whatsapp.svg"
                alt="whatsapp"
                width={30}
                height={30}
              />
              <p className="mt-7 text-red-500 hidden sm:block">--- Whatsapp</p>
            </div>
          </div>
        </div>
        <div className=" sm:pr-[5rem]">
          <p className="text-xl font-semibold mt-3 text-center">
            Reach me easily on my email
          </p>
          <div className="w-full mt-5">
            <input
              type="email"
              className="w-full border bg-black text-center p-2 border-red-500 focus:outline-none rounded-xl"
              name=""
              placeholder="your email@example.com"
              id=""
            />
          </div>
          <div className="w-full mt-5">
            <textarea
              name=""
              id=""
              cols={30}
              placeholder=""
              rows={3}
              className="bg-black flex text-center  w-full border rounded-xl border-red-500 focus:outline-none"
            ></textarea>
          </div>
          <div className=" flex justify-center  mt-5 ">
            <button
              type="submit"
              className=" border border-red-500 hover:bg-red-500 rounded-xl p-3 w-full"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
