import React from "react";
import Category from "./Category";
import { useParams } from "react-router-dom";
import { Data, Items } from "./types";

const Design: React.FC<any> = ({ data }) => {
  const { id } = useParams();

  const result = data.find((item: Data) => item?.category === id);
  console.log(id);
  return (
    <div>
      <div className="bg-[#E7816B] px-[24px] py-[80px] md:m-6 md:rounded-2xl md:px-[70px] xl:mx-[170px]">
        <h1 className="text-3xl text-center text-white xl:text-left">
          {result.category}
        </h1>
        <p className="my-10  text-center text-white xl:text-left">
          {result.text}
        </p>
      </div>
      <div className="m-[30px] xl:mx-[170px] xl:flex xl:flex-wrap xl:gap-10 xl:m-[10%]">
        {result.items.map((item: Items) => (
          <div className="bg-[#FDF3F0] mt-10 rounded-2xl pb-10 md:flex md:pb-0 xl:block xl:w-[30%]">
            <img
              src={`https://designo-api.onrender.com/designo/${item.image}`}
            />
            <div className="md:m-auto xl:m-0">
              <h1 className="text-center mb-3 mt-10  text-[#E7816B] font-medium tracking-[5px]">
                {item.name}
              </h1>
              <p className="text-center text-[#333136]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Category />
    </div>
  );
};

export default Design;
