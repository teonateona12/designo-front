import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

export default function Nav() {
  const [nav, setNav] = useState<Boolean>(true);
  return (
    <div>
      <nav className="flex justify-between p-6 md:px-9 py-12 xl:py-[60px] xl:px-[170px]">
        <div className="flex gap-4">
          <div>
            <img src="https://designo-api.onrender.com/designo/logo.png" />
          </div>
          <Link to="/">
            <h1 className="text-[#333136] tracking-[5px] font-bold">DESIGNO</h1>
          </Link>
        </div>
        <div className="md:hidden">
          <img
            onClick={() => setNav(!nav)}
            src={`https://designo-api.onrender.com/designo/${
              nav ? "icon-hamburger.svg" : "icon-close.svg"
            }`}
          />
        </div>
        <div className=" gap-6 hidden md:flex">
          <Link to="/about">
            <p className="tracking-[2px]">OUR COMPANY</p>
          </Link>
          <Link to="/location">
            <p className="tracking-[2px]">LOCATIONS</p>
          </Link>
          <Link to="/contact">
            <p className="tracking-[2px]">CONTACT</p>
          </Link>
        </div>
      </nav>
      {!nav && <MobileNav />}
    </div>
  );
}
