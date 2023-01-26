import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-[#E7816B] px-[24px] pt-[80px] md:m-6 md:rounded-2xl md:px-[70px] xl:mx-[170px] xl:flex">
        <div className="flex flex-col gap-6 xl:w-[50%]">
          <h1 className="text-3xl text-center text-white xl:text-left">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-center text-white xl:text-left">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button className="bg-white text-black rounded-lg p-3 flex m-auto xl:m-0 xl:w-[35%]">
            LEARN MORE
          </button>
        </div>
        <div>
          <img
            className="m-auto"
            src="http://localhost:5000/designo/image.png"
          />
        </div>
      </div>
      <div className="div mx-6 my-9 flex flex-col gap-10 xl:px-[170px] xl:flex-row ">
        <div className="relative">
          <img
            className="rounded-2xl w-full md:hidden"
            src="http://localhost:5000/designo/web.jpg"
          />
          <img
            className="rounded-2xl w-full hidden md:block xl:hidden"
            src="http://localhost:5000/designo/web-tab.jpg"
          />
          <img
            className="rounded-2xl hidden xl:block xl:w-full"
            src="http://localhost:5000/designo/web-des.jpg"
          />
          <div className="absolute top-[50%] flex flex-col left-[30%]">
            <h1 className="text-white text-center text-2xl tracking-[2px]">
              WEB DESIGN
            </h1>
            <div className="flex gap-2 ">
              <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
              <img src="http://localhost:5000/designo/icon.svg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="relative">
            <img
              className="rounded-2xl w-full md:hidden"
              src="http://localhost:5000/designo/app.jpg"
            />
            <img
              className="rounded-2xl w-full hidden md:block xl:hidden"
              src="http://localhost:5000/designo/app-tab.jpg"
            />
            <img
              className="rounded-2xl hidden xl:block xl:w-full"
              src="http://localhost:5000/designo/app-des.jpg"
            />
            <div className="absolute top-[50%] flex flex-col left-[30%]">
              <h1 className="text-white text-center text-2xl tracking-[2px]">
                APP DESIGN
              </h1>
              <div className="flex gap-2 justify-center">
                <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
                <img src="http://localhost:5000/designo/icon.svg" />
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-2xl w-full md:hidden"
              src="http://localhost:5000/designo/graphic.jpg"
            />
            <img
              className="rounded-2xl w-full hidden md:block xl:hidden"
              src="http://localhost:5000/designo/graphic-tab.jpg"
            />
            <img
              className="rounded-2xl hidden xl:block xl:w-full"
              src="http://localhost:5000/designo/graphic-des.jpg"
            />
            <div className="absolute top-[50%] flex flex-col left-[30%]">
              <h1 className="text-white text-center text-2xl tracking-[2px]">
                GRAPHIC DESIGN
              </h1>
              <div className="flex gap-2 justify-center">
                <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
                <img src="http://localhost:5000/designo/icon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
