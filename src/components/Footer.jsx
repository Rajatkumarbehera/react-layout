import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { socials, techs } from "../utils/constant";

const SocialItem = ({ name, link }) => (
  <Link to={link} className="text-sm text-primary font-syne">
    {name}
  </Link>
);

const TechItem = ({ image, text }) => (
  <>
    <img src={image} alt="star" className="w-12 h-12 md:w-16 md:h-16" />
    <p className="text-3xl md:text-[56px] font-syne font-bold specialtext text-white last:mr-[24px] md:last:mr-[40px]">
      {text}
    </p>
  </>
);

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-10 md:pt-16">
      <div className="flex items-center overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex flex-shrink-0 items-center gap-6 md:gap-10 animate-marquee"
          >
            {techs.map((tech, index) => (
              <TechItem key={index} {...tech} />
            ))}
          </div>
        ))}
      </div>
      <div className="pt-16 md:pt-28 pb-6 md:pb-8 px-25">
        <div className="flex flex-col items-center gap-6 md:gap-8">
          <h1 className="text-primary font-syne text-4xl lg:text-[64px] font-extrabold">
            LET’S TALK!
          </h1>

          <Link
            to={"mailto:rehanurraihan@gmail.com"}
            className="flex items-center gap-2 font-poppins text-base md:text-lg text-primary"
          >
            rehanurraihan@gmail.com
            <MdArrowOutward />
          </Link>
        </div>
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-primary font-syne">
            &copy; Rehan Raihan - 2023
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:mt-0">
            {socials.map((social, index) => (
              <SocialItem key={index} {...social} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
