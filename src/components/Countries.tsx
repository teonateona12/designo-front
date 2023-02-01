import React from "react";

export default function Countries() {
  return (
    <div className="my-[30%] flex flex-col gap-16 md:my-[15%] xl:flex-row">
      <div className="flex flex-col m-auto w-[50%] gap-3 md:w-[30%]">
        <img src="http://localhost:5000/designo/loc1.png" />
        <p className="tracking-[5px] text-[#333136] text-center font-medium	">
          CANADA
        </p>
        <button className="bg-[#E7816B] font-medium py-2 rounded-lg text-white">
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col m-auto w-[50%] gap-3 md:w-[30%]">
        <img src="http://localhost:5000/designo/loc2.png" />
        <p className="tracking-[5px] text-[#333136] text-center font-medium	">
          AUSTRALIA
        </p>
        <button className="bg-[#E7816B] font-medium py-2 rounded-lg text-white">
          SEE LOCATION
        </button>
      </div>
      <div className="flex flex-col m-auto w-[50%] gap-3 md:w-[30%]">
        <img src="http://localhost:5000/designo/loc3.png" />
        <p className="tracking-[5px] text-[#333136] text-center font-medium	">
          UNITED KINGDOM
        </p>
        <button className="bg-[#E7816B] font-medium py-2 rounded-lg text-white">
          SEE LOCATION
        </button>
      </div>
    </div>
  );
}
