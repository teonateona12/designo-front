import React from "react";
import Countries from "./Countries";

export default function About() {
  return (
    <div className="xl:px-[170px]">
      <div className="xl:flex">
        <img
          className="md:hidden w-full"
          src="https://designo-api.onrender.com/designo/about1.png"
        />
        <img
          className="hidden md:block md:w-full xl:order-2 xl:w-[50%]"
          src="https://designo-api.onrender.com/designo/about1tab.png"
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
          className="md:hidden w-full"
          src="https://designo-api.onrender.com/designo/about2.png"
        />
        <img
          className="hidden md:block md:w-full  xl:w-[50%]"
          src="https://designo-api.onrender.com/designo/about2tab.png"
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
      <div className="xl:flex xl:mb-[20%]">
        <img
          className="md:hidden w-full"
          src="https://designo-api.onrender.com/designo/about3.png"
        />
        <img
          className="hidden md:block md:w-full xl:order-2  xl:w-[50%]"
          src="https://designo-api.onrender.com/designo/about3tab.png"
        />
        <div className="bg-[#FDF3F0] p-8 md:px-[20%] xl:px-10 xl:py-20 xl:order-1">
          <h1 className="text-[#E7816B] text-3xl font-normal text-center xl:text-left">
            The real deal
          </h1>
          <p className="text-center my-5 color-[#333136] text-sm xl:text-left">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success. <br />
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </div>
  );
}
