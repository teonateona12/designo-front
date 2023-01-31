import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#E7816B] rounded-2xl	m-5 py-20 px-5 relative xl:mx-[170px] xl:flex xl:p-[70px] xl:justify-between">
        <div className="xl:w-[50%]">
          <h1 className="text-white text-center text-3xl xl:text-left">
            Let’s talk about your project
          </h1>
          <p className="text-white text-center text-sm my-10 px-10 xl:text-left xl:pl-0">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <Link to="/contact">
          {" "}
          <button className="text-[#333136] bg-white p-3 rounded-lg flex m-auto">
            GET IN TOUCH
          </button>
        </Link>
      </div>
      <footer className="bg-[#1D1C1E] flex flex-col gap-6 pt-[50%] pb-10 -mt-[30%] md:px-10 md:-mt-[20%] md:pt-[30%] xl:px-[170px]">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex gap-4 justify-center">
            <div>
              <img src="http://localhost:5000/designo/logo.png" />
            </div>
            <Link to="/">
              {" "}
              <h1 className="text-white tracking-[5px] font-bold text-2xl">
                DESIGNO
              </h1>
            </Link>
          </div>
          <div className="flex flex-col gap-[32px] md:flex-row">
            <Link to="/about">
              <p className="text-white text-center">OUR COMPANY</p>
            </Link>
            <Link to="/location">
              <p className="text-white text-center">LOCATIONS</p>
            </Link>
            <Link to="/contact">
              <p className="text-white text-center">CONTACT</p>
            </Link>
          </div>
        </div>
        <div className="md:flex md:justify-between md:mt-10">
          <p className="text-white text-center opacity-50 md:text-left">
            Designo Central Office <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </p>
          <p className="text-white text-center opacity-50 md:text-left">
            Contact Us (Central Office)
            <br />
            P : +1 253-863-8967 <br /> M : contact@designo.co
          </p>
          <div>
            <img
              className="m-auto"
              src="http://localhost:5000/designo/icons.png"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
