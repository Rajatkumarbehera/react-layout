import React from "react";
import { faqs } from "../utils/constant";
import { Accordion } from "./Accordion";
import { SectionHeader } from "./SectionHeader";

const FAQItem = ({ question, children }) => {
  return <div question={question}>{children}</div>;
};

export const FAQ = () => {
  return (
    <div className="py-12 md:py-16">
      <SectionHeader title="Frequently asked questions" />

      <Accordion>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question}>
            {faq.answer}
          </FAQItem>
        ))}
      </Accordion>
    </div>
  );
};
