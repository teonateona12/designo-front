import React from "react";
import Countries from "./Countries";

export default function About() {
  return (
    <div>
      <div className="xl:flex">
        <img
          className="md:hidden"
          src="http://localhost:5000/designo/about1.png"
        />
        <img
          className="hidden md:block md:w-full xl:order-2"
          src="http://localhost:5000/designo/about1tab.png"
        />
        <div className="bg-[#E7816B] pt-16 pb-10 md:px-[20%] xl:order-1 xl:px-10 xl:py-20">
          <h1 className="text-center text-white text-3xl font-normal xl:text-left">
            About Us
          </h1>
          <p className="text-center text-white text-sm mt-8 xl:text-left">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>
      <div className="xl:flex xl:mt-[10%]">
        <img
          className="md:hidden"
          src="http://localhost:5000/designo/about2.png"
        />
        <img
          className="hidden md:block md:w-full"
          src="http://localhost:5000/designo/about2tab.png"
        />
        <div className="bg-[#FDF3F0] p-8 md:px-[20%] xl:px-10 xl:py-20">
          <h1 className="text-[#E7816B] text-3xl font-normal text-center xl:text-left">
            World-class talent
          </h1>
          <p className="text-center my-5 color-[#333136] text-sm xl:text-left">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. <br />
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
      </div>
      <Countries />
    </div>
  );
}
