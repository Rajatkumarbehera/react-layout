import React, { useState } from "react";

export const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mt-8">
      {children.map((child, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h4
            className="font-syne text-[18px] md:text-[24px] lg:text-[32px] font-medium text-primary text-left transition-all cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            {child.props.question}
          </h4>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out font-poppins text-gray text-[14px] md:text-base lg:text-lg leading-[27px] ${
              openIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
};
