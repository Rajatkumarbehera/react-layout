import React from "react";
import { experiences } from "../utils/constant";
import { SectionHeader } from "./SectionHeader";

const ExperienceItem = ({ role, company, duration }) => (
  <div className="flex justify-between items-center py-2 border-b-[1.5px] border-[#808083]">
    <h4 className="font-syne text-primary font-medium text-sm md:text-2xl lg:text-[32px]">
      {role}
    </h4>
    <div className="text-right">
      <h5 className="font-syne text-primary font-semibold text-sm md:text-xl lg:text-2xl">
        {company}
      </h5>
      <span className="font-poppins text-primary text-xs md:text-base lg:text-base">
        {duration}
      </span>
    </div>
  </div>
);

export const Experience = () => {
  return (
    <div className="py-12 md:py-16">
      <SectionHeader title="Experience" />

      <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};
