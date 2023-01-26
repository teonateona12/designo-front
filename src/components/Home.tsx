import React from "react";

export default function Home() {
  return (
    <div className="bg-[#E7816B] px-[24px] pt-[80px] md:m-6 md:rounded-2xl md:px-[70px] xl:mx-[170px] xl:flex">
      <div className="flex flex-col gap-6 xl:w-[50%]">
        <h1 className="text-3xl text-center text-white xl:text-left">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-center text-white xl:text-left">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="bg-white text-black rounded-lg p-3 flex m-auto xl:m-0 xl:w-[35%]">
          LEARN MORE
        </button>
      </div>
      <div>
        <img className="m-auto" src="http://localhost:5000/designo/image.png" />
      </div>
    </div>
  );
}
