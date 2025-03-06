import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../utils/constant";
import { PlatformItem } from "./PlatformItem";
import { SectionHeader } from "./SectionHeader";

const BlogItem = ({ title, date, image, platforms }) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
      <img
        src={image}
        alt={title}
        className="w-full md:w-[286px] h-auto md:h-[214.5px] rounded-3xl"
      />
      <div className="flex flex-1 justify-between items-center w-full">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-gray font-poppins text-base md:text-lg">{date}</p>
          <h3 className="text-primary font-syne text-sm md:text-[32px] lg:text-[40px] font-semibold">
            {title}
          </h3>
          <PlatformItem items={platforms} />
        </div>
        <Link to={"/"} className="self-end md:self-center">
          <button className="bg-primary font-syne text-secondary font-semibold text-sm px-6 md:px-8 py-3 md:py-4 rounded-[100px] hover:border hover:border-primary hover:text-primary hover:bg-secondary cursor-pointer transition-colors">
            Read
          </button>
        </Link>
      </div>
    </div>
  );
};

export const Blog = () => {
  return (
    <div className="py-12 md:py-16">
      <SectionHeader title="Blog" showViewAll={true} />

      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
        {blogs.map((blog, index) => (
          <BlogItem key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};
