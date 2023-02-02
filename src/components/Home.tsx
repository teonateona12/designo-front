import React from "react";
import Category from "./Category";

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
            src="https://designo-api.onrender.com/designo/image.png"
          />
        </div>
      </div>
      <Category />

      <div className="p-6 md:px-9 py-12 xl:py-[60px] xl:px-[170px] xl:flex xl:gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:gap-10 xl:flex-col">
          <div>
            <img
              className="m-auto"
              src="https://designo-api.onrender.com/designo/image1.png"
            />
          </div>
          <div>
            <h1 className="text-center tracking-[5px] md:text-left xl:text-center">
              PASSIONATE
            </h1>
            <p className="text-center mt-4 md:text-left  xl:text-center">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 my-20 md:flex-row md:gap-10 xl:my-0 xl:flex-col">
          <div>
            <img
              className="m-auto"
              src="https://designo-api.onrender.com/designo/image2.png"
            />
          </div>
          <div>
            <h1 className="text-center tracking-[5px] md:text-left xl:text-center">
              RESOURCEFUL
            </h1>
            <p className="text-center mt-4 md:text-left  xl:text-center">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-10 xl:flex-col">
          <div>
            <img
              className="m-auto"
              src="https://designo-api.onrender.com/designo/image3.png"
            />
          </div>
          <div>
            <h1 className="text-center tracking-[5px] md:text-left xl:text-center">
              FRIENDLY
            </h1>
            <p className="text-center mt-4 md:text-left xl:text-center">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
