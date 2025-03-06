import React from "react";
import { Blog } from "../components/Blog";
import { Experience } from "../components/Experience";
import { Expertise } from "../components/Expertise";
import { FAQ } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Testimonials } from "../components/Testimonials";
import { Works } from "../components/Works";

export const Home = () => {
  return (
    <div className="select-none">
      <div className="bg-secondary px-6 md:px-14 lg:px-25 pt-10 md:pt-20 lg:pt-26 w-full">
        <Hero />
        <Expertise />
        <Works />
        <Experience />
        <Blog />
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
};
