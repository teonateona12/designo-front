import React from "react";
import Countries from "./Countries";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const personSchema = z.object({
  name: z.string(),
  message: z.string(),
  email: z.string(),
  phone: z.number(),
});
type Person = z.infer<typeof personSchema>;

const validationSchema = z.object({
  name: z.string().min(1, { message: "Firstname is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  phone: z.string().min(9, { message: "Phone number is required" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });
  const sendEmail = async (data: any) => {
    console.log(data);
    const { name, message, phone, email } = data;
    try {
      const res = await axios.post(
        "https://designo-api.onrender.com/api/email",
        {
          name,
          message,
          phone,
          email,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" md:px-9 xl:px-[170px]">
      <div className="bg-[#E7816B] py-20 px-3 md:rounded-2xl md:px-10 md:py-20 xl:flex xl:gap-24 xl:px-20">
        <div className="flex flex-col gap-6 xl:w-[95%] xl:m-auto">
          <h1 className="text-center text-white text-3xl font-medium md:text-left xl:text-4xl	">
            Contact Us
          </h1>
          <p className="text-center text-white leading-7 md:text-left">
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </p>
        </div>
        <form onSubmit={handleSubmit(sendEmail)}>
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Name"
            {...register("name")}
          ></input>
          {errors.name && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.name?.message}
            </p>
          )}
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Email Address"
            {...register("email")}
          ></input>
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-4 px-2"
            placeholder="Phone"
            {...register("phone")}
          ></input>
          {errors.phone && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.phone?.message}
            </p>
          )}
          <input
            className="w-full bg-[#E7816B] text-white border-b-2 py-6 px-2 pb-20"
            placeholder="Your Message"
            {...register("message")}
          ></input>
          {errors.message && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.message?.message}
            </p>
          )}
          <button className="bg-white py-3 px-10 flex m-auto mt-[10%] rounded-lg md:m-0 md:mt-[10%]">
            SUBMIT
          </button>
        </form>
      </div>
      <Countries />
    </div>
  );
}
