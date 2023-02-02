import React from "react";
import { Link } from "react-router-dom";

export default function Category() {
  return (
    <div className="div mx-6 my-9 flex flex-col gap-10 xl:px-[170px] xl:flex-row ">
      <div className="relative">
        <img
          className="rounded-2xl w-full md:hidden"
          src="https://designo-api.onrender.com/designo/web.jpg"
        />
        <img
          className="rounded-2xl w-full hidden md:block xl:hidden"
          src="https://designo-api.onrender.com/designo/web-tab.jpg"
        />
        <img
          className="rounded-2xl hidden xl:block xl:w-full"
          src="https://designo-api.onrender.com/designo/web-des.jpg"
        />
        <div className="absolute top-[50%] flex flex-col left-[30%]">
          <Link to="/Web design">
            <h1 className="text-white text-center text-2xl tracking-[2px]">
              WEB DESIGN
            </h1>
          </Link>

          <div className="flex gap-2 ">
            <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
            <img src="https://designo-api.onrender.com/designo/icon.svg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="relative">
          <img
            className="rounded-2xl w-full md:hidden"
            src="https://designo-api.onrender.com/designo/app.jpg"
          />
          <img
            className="rounded-2xl w-full hidden md:block xl:hidden"
            src="https://designo-api.onrender.com/designo/app-tab.jpg"
          />
          <img
            className="rounded-2xl hidden xl:block xl:w-full"
            src="https://designo-api.onrender.com/designo/app-des.jpg"
          />
          <div className="absolute top-[50%] flex flex-col left-[30%]">
            <Link to="/App design">
              <h1 className="text-white text-center text-2xl tracking-[2px]">
                APP DESIGN
              </h1>
            </Link>

            <div className="flex gap-2 justify-center">
              <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
              <img src="https://designo-api.onrender.com/designo/icon.svg" />
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl w-full md:hidden"
            src="https://designo-api.onrender.com/designo/graphic.jpg"
          />
          <img
            className="rounded-2xl w-full hidden md:block xl:hidden"
            src="https://designo-api.onrender.com/designo/graphic-tab.jpg"
          />
          <img
            className="rounded-2xl hidden xl:block xl:w-full"
            src="https://designo-api.onrender.com/designo/graphic-des.jpg"
          />
          <div className="absolute top-[50%] flex flex-col left-[30%]">
            <Link to="/Graphic design">
              <h1 className="text-white text-center text-2xl tracking-[2px]">
                GRAPHIC DESIGN
              </h1>
            </Link>

            <div className="flex gap-2 justify-center">
              <p className="text-white tracking-[2px]">VIEW PROJECTS</p>
              <img src="https://designo-api.onrender.com/designo/icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
