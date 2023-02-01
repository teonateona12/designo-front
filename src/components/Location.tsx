import React from "react";

export default function Location() {
  return (
    <div className=" md:px-9 xl:px-[170px] flex flex-col gap-10 xl:mb-[15%]">
      <div className="xl:flex xl:gap-10">
        <img
          className="w-full md:rounded-xl xl:w-[75%] xl:order-2"
          src="http://localhost:5000/designo/canada.png"
        />
        <div className="bg-[#FDF3F0] flex flex-col gap-7 p-28 md:justify-between md:flex-row md:rounded-xl md:mt-[5%] xl:mt-0 xl:order-1">
          <div>
            <h1 className="text-[#E7816B] text-3xl font-medium text-center md:text-left md:text-4xl	">
              Canada
            </h1>
            <p className="text-[#333136] mt-3 text-center md:text-left">
              <span className="font-bold">
                Designo Central Office <br />
              </span>
              3886 Wellington StreetToronto, Ontario M9C 3J5
            </p>
          </div>
          <p className="text-[#333136] md:mt-[4%] text-center md:text-left">
            <span className="font-bold">
              Contact <br />
            </span>
            P : +1 253-863-8967 M : contact@designo.co
          </p>
        </div>
      </div>

      <div className="xl:flex xl:gap-10">
        <img
          className="w-full md:rounded-xl xl:w-[75%] "
          src="http://localhost:5000/designo/australia.png"
        />
        <div className="bg-[#FDF3F0] flex flex-col gap-7 p-28 md:justify-between md:flex-row md:rounded-xl md:mt-[5%] xl:mt-0 ">
          <div>
            <h1 className="text-[#E7816B] text-3xl font-medium text-center md:text-left md:text-4xl	">
              Australia
            </h1>
            <p className="text-[#333136] mt-3 text-center md:text-left">
              <span className="font-bold">
                Designo AU Office <br />
              </span>
              19 Balonne StreetNew South Wales 2443
            </p>
          </div>
          <p className="text-[#333136] md:mt-[4%] text-center md:text-left">
            <span className="font-bold">
              Contact <br />
            </span>
            P : (02) 6720 9092 M : contact@designo.au
          </p>
        </div>
      </div>

      <div className="xl:flex xl:gap-10">
        <img
          className="w-full md:rounded-xl xl:w-[75%] xl:order-2"
          src="http://localhost:5000/designo/uk.png"
        />
        <div className="bg-[#FDF3F0] flex flex-col gap-7 p-28 md:justify-between md:flex-row md:rounded-xl md:mt-[5%] xl:mt-0 xl:order-1">
          <div>
            <h1 className="text-[#E7816B] text-3xl font-medium text-center md:text-left md:text-4xl	">
              United Kingdom
            </h1>
            <p className="text-[#333136] mt-3 text-center md:text-left">
              <span className="font-bold">
                Designo UK Office <br />
              </span>
              13 Colorado WayRhyd-y-fro SA8 9GA
            </p>
          </div>
          <p className="text-[#333136] md:mt-[4%] text-center md:text-left">
            <span className="font-bold">
              Contact <br />
            </span>
            P : 078 3115 1400 M : contact@designo.uk
          </p>
        </div>
      </div>
    </div>
  );
}
