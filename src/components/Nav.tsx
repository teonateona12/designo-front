import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [nav, setNav] = useState(false);
  return (
    <div>
      <nav className="flex justify-between p-6 md:px-9 py-12 xl:py-[60px] xl:px-[170px]">
        <div className="flex gap-4">
          <div>
            <img src="http://localhost:5000/designo/logo.png" />
          </div>
          <h1 className="text-[#333136] tracking-[5px] font-bold">DESIGNO</h1>
        </div>
        <div className="md:hidden">
          <img
            onClick={() => setNav(!nav)}
            src={`http://localhost:5000/designo/${
              nav ? "icon-hamburger.svg" : "icon-close.svg"
            }`}
          />
        </div>
        <div className=" gap-6 hidden md:flex">
          <p className="tracking-[2px]">OUR COMPANY</p>
          <p className="tracking-[2px]">LOCATIONS</p>
          <p className="tracking-[2px]">CONTACT</p>
        </div>
      </nav>
      {!nav && <MobileNav />}
    </div>
  );
}
