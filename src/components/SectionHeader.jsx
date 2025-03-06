import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/star.svg";

export const SectionHeader = ({ title, showViewAll = false }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={star} alt="star" className="h-6 md:h-8" />
        <h2 className="font-bold text-lg md:text-2xl lg:text-[40px] font-syne text-primary">
          {title}
        </h2>
      </div>
      {showViewAll && (
        <Link to={"/"}>
          <button className="font-syne text-primary cursor-pointer font-medium underline text-sm md:text-[16px] lg:text-[18px]">
            view all
          </button>
        </Link>
      )}
    </div>
  );
};
