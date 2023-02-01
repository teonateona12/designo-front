import React from "react";
import Countries from "./Countries";

export default function Contact() {
  return (
    <div className=" md:px-9 xl:px-[170px]">
      <div className="bg-[#E7816B] py-20 px-3 md:rounded-2xl md:px-10 md:py-20 xl:flex xl:gap-24 xl:px-20">
        <div className="flex flex-col gap-6 xl:w-[95%] xl:m-auto">
          <h1 className="text-center text-white text-3xl font-medium md:text-left xl:text-4xl	">
            Contact Us
          </h1>
          <p className="text-center text-white leading-7 md:text-left">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <div>
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Name"
          ></input>
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Email Address"
          ></input>
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Phone"
          ></input>
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-6 px-2 pb-20"
            placeholder="Your Message"
          ></input>
          <button className="bg-white py-3 px-10 flex m-auto mt-[10%] rounded-lg md:m-0 md:mt-[10%]">
            SUBMIT
          </button>
        </div>
      </div>
      <Countries />
    </div>
  );
}
