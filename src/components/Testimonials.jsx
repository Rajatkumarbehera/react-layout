import React from "react";
import quote from "../assets/images/quote.png";
import { testimonials } from "../utils/constant";
import { Carousel } from "./Carousel";
import { SectionHeader } from "./SectionHeader";

const TestimonialItem = ({ name, location, image, review }) => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
    <div className="flex items-center gap-4 w-full md:w-[498px] py-2 md:py-11">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 md:w-16 md:h-16 rounded-[100px]"
      />
      <div>
        <h5 className="font-syne text-primary font-semibold md:text-lg lg:text-2xl">
          {name}
        </h5>
        <p className="text-gray font-poppins font-medium md:text-sm lg:text-lg">
          {location}
        </p>
      </div>
    </div>
    <div className="relative pt-2 md:pt-8 w-full">
      <h4 className="font-syne text-primary font-medium text-lg md:text-[20px] lg:text-[32px] leading-6 md:leading-[40px] md:w-[500px] lg:w-[710px]">
        {review}
      </h4>
      <img
        src={quote}
        alt="quote"
        className="w-12 md:w-[101.65px] h-auto absolute -top-2 md:-top-[5.65px]"
      />
    </div>
  </div>
);

export const Testimonials = () => {
  return (
    <div className="py-12 md:py-16">
      <SectionHeader title="What they say" />

      <div className="mt-6 md:mt-8">
        <Carousel interval={3000}>
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
