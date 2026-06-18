import React from 'react';
import { ClipboardList, PenTool, Code2, Bug, Rocket, Globe, Globe2 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Requirement Samajhna",
      desc: "Sabse pehle hum aapke business, goals aur project ki zarurat ko achhi tarah samajhte hain.",
      icon: <ClipboardList className="w-8 h-8 text-primary" />
    },
    {
      title: "Design Banana",
      desc: "Iske baad hum attractive aur user-friendly design create karte hain jo aapko pasand aaye.",
      icon: <PenTool className="w-8 h-8 text-accent" />
    },
    {
      title: "Development",
      desc: "Approval ke baad hum website ya mobile app ko latest technology ke saath develop karte hain.",
      icon: <Code2 className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Testing",
      desc: "Launch se pehle hum sab kuch check karte hain taaki website ya app bina kisi issue ke chale.",
      icon: <Bug className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Delivery",
      desc: "Final project ready hone ke baad hum deliver karte hain aur aage support bhi provide karte hain.",
      icon: <Rocket className="w-8 h-8 text-yellow-500" />
    }
  ];

  return (
    <section className="py-12 bg-white dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* <h2 className="text-secondary dark:text-primary tracking-wider font-bold text-sm uppercase mb-3">Our Workflow</h2> */}
          {/* <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:text-white font-semibold text-xs tracking-wider uppercase mb-4 border border-primary/20">
            <Globe2 className="w-3.5 h-3.5" />
           
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
            Working
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Process
            </span>{" "}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Hum ek smart aur simple process follow karte hain taaki aapka project time par, budget ke andar aur best quality ke saath deliver ho.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-accent to-primary opacity-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>

                <div className="w-24 h-24 mx-auto bg-gray-50 dark:bg-[#111111] rounded-2xl flex items-center justify-center border-2 border-gray-100 dark:border-gray-800 shadow-sm relative z-10 group-hover:border-primary group-hover:-translate-y-2 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>

                <h4 className="text-xl font-bold mt-6 mb-3 text-foreground font-heading">{step.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
