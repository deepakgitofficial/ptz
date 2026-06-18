"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";
import { HelpCircle, ArrowRight, MessageSquare } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`border border-gray-200/60 dark:border-gray-800/60 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-primary/5 border-primary/30 dark:bg-primary/5 dark:border-primary/20 shadow-md' : 'bg-white dark:bg-slate-900 hover:border-gray-300 dark:hover:border-gray-700'}`}>
      <button
        className="w-full text-left p-5 flex justify-between items-center text-foreground cursor-pointer transition-colors font-heading select-none outline-none group"
        onClick={onClick}
      >
        <span className={`font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-800 dark:text-gray-200 group-hover:text-primary'}`}>{title}</span>
        <span className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 dark:bg-slate-800 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'}`}>
          {isOpen ? <AiOutlineMinus className="w-3.5 h-3.5" /> : <IoMdAdd className="w-3.5 h-3.5" />}
        </span>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-5 pb-5 text-sm md:text-base text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800/40 pt-4 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Form Submit Karne Ke Baad Kitni Jaldi Reply Milega?",
      content: "Hum aam taur par 2 se 4 ghante ke andar reply kar dete hain. Maximum 12 ghante ke andar aapko response mil jayega kyunki hum aapke time ko importance dete hain.",
    },

    {
      title: "Website Banane Me Kitna Time Lagta Hai?",
      content: "Project ke type aur requirements par depend karta hai. Normal business website 5 se 10 din me aur custom projects thoda extra time le sakte hain."
    },

    {
      title: "Kya Aap Mobile Friendly Website Banate Hain?",
      content: "Haan, hum har website ko mobile, tablet aur laptop ke liye fully responsive banate hain taaki sab devices par perfect chale."
    },

    {
      title: "Kya Small Business Ke Liye Affordable Plans Hain?",
      content: "Haan, hum small businesses, startups aur local shops ke budget ke hisaab se affordable packages provide karte hain."
    },

    {
      title: "Website Banne Ke Baad Support Milega Kya?",
      content: "Bilkul. Project delivery ke baad bhi hum technical support aur maintenance help provide karte hain."
    },

    {
      title: "Kya Aap Mobile App Development Service Bhi Dete Hain?",
      content: "Haan, hum Android aur iPhone dono ke liye custom mobile apps develop karte hain jo business growth me help karte hain."
    },

    {
      title: "Project Start Karne Ke Liye Kya Karna Hoga?",
      content: "Bas hume apni requirement batayein. Hum aapko best solution aur project plan share kar denge."
    }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-gray-50/20 to-transparent dark:from-slate-950/10 dark:to-transparent">
      {/* Decorative Blur BG */}
      <div className="absolute right-0 top-1/3 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Header & CTA */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:text-primary-dark font-semibold text-xs tracking-wider uppercase border border-primary/20">
              <HelpCircle className="w-3.5 h-3.5" /> Support FAQ
            </div> */}


            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
              Aapke Sawalon Ke   Jawaab
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Yahan   Hai
              </span>

            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Yahan aapko PureTechZone se judi common queries ke answers mil jayenge. Agar aapko aur koi help chahiye, toh hamari team sirf ek message door hai.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" /> Aaj Hi Contact Karein
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Accordion Accordions */}
          <div className="lg:col-span-7">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}

            <div className="mt-6 ">
              <Link href="/faq">
                <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  View All FAQ
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* bottom  */}


        </div>
      </div>
    </section>
  );
};

export default FaqSection;

