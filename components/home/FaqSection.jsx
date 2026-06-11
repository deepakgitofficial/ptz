"use client";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className=" bg-gray-50 dark:bg-gray-800 rounded-lg mb-4 shadow-sm py-4">
      <h4
        className="w-full text-left p-4 flex justify-between items-center text-semibold  text-foreground cursor-pointer transition-colors text-primary text-lg font-heading"
        onClick={onClick}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? <AiOutlineMinus /> : <IoMdAdd />}</span>
      </h4>

      {isOpen && (
        <div className="px-6 text-gray-400  rounded-b-lg">
          {content}
        </div>
      )}
    </div>
  );
};



const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "How quickly will Digilight respond after I submit the contact form?",
      content: "We typically respond within 24 hours during business days.",
    },
    {
      title: "Do you offer SEO services for local businesses?",
      content: "Yes. We specialize in Local SEO, Google Business Profile optimization, keyword targeting, and ranking businesses in their city..",
    },
    {
      title: "What industries do you work with?",
      content: "We work with hotels, doctors, local shops, startups, real estate, coaching institutes, ecommerce brands, and service-based businesses.",
    },
    {
      title: "How can I contact Digilight instantly?",
      content: "You can reach us instantly via WhatsApp chat, phone call, email support, or contact form submission. We respond quickly during business hours.",
    },

  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white dark:bg-[#0a0a0a]">
      <div className="text-center mb-8 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-heading">
          Frequently Asked Questions
        </h3>
        {/* <p className="text-gray-600 dark:text-gray-400 text-lg">
          Answers to common questions about our services and processes.
        </p> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default FaqSection
