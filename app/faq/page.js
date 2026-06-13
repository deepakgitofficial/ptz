import React from "react";
import FAQContent from "@/components/faq/FAQContent";

export const metadata = {
  title: "Frequently Asked Questions | Pure Tech Zone",
  description:
    "Got questions? We've got answers. Explore Pure Tech Zone's FAQs regarding web development, mobile apps, pricing, support, SEO, and more.",
};

const data = [
  {
    title: "Form Submit Karne Ke Baad Kitni Jaldi Reply Milega?",
    content: "Hum aam taur par 2 se 4 ghante ke andar reply kar dete hain. Maximum 12 ghante ke andar aapko response mil jayega kyunki hum aapke time ko importance dete hain.",
  },
  {
    title: "Kya Aap Local Business Ke Liye SEO Service Dete Hain?",
    content: "Haan, hum Local SEO, Google Business Profile Optimization aur location based SEO services provide karte hain taaki aapka business Google par top results me aaye.",
  },
  {
    title: "Aap Kin Business Categories Ke Saath Kaam Karte Hain?",
    content: "Hum schools, coaching institutes, hotels, doctors, local shops, startups, real estate, e-commerce stores aur service based businesses ke saath kaam karte hain.",
  },
  {
    title: "Main PureTechZone Se Turant Contact Kaise Kar Sakta Hoon?",
    content: "Aap WhatsApp button par click karke, direct call karke ya Contact Form submit karke humse turant connect kar sakte hain. Hum aapki help ke liye ready hain.",
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
    title: "Website Banne Ke Baad Support Milega Kya?",
    content: "Bilkul. Project delivery ke baad bhi hum technical support aur maintenance help provide karte hain."
  },
  {
    title: "Kya Aap Existing Website Ko Redesign Kar Sakte Hain?",
    content: "Haan, agar aapki purani website outdated hai toh hum usse modern design aur better performance ke saath redesign kar sakte hain."
  },
  {
    title: "Kya Aap E-commerce Website Bana Sakte Hain?",
    content: "Haan, hum online store aur e-commerce websites develop karte hain jahan aap products sell kar sakte hain aur online payments receive kar sakte hain."
  },
  {
    title: "Kya Aap Mobile App Development Service Bhi Dete Hain?",
    content: "Haan, hum Android aur iPhone dono ke liye custom mobile apps develop karte hain jo business growth me help karte hain."
  },
  {
    title: "Project Start Karne Ke Liye Kya Karna Hoga?",
    content: "Bas hume apni requirement batayein. Hum aapko best solution aur project plan share kar denge."
  },
  {
    title: "Kya Small Business Ke Liye Affordable Plans Hain?",
    content: "Haan, hum small businesses, startups aur local shops ke budget ke hisaab se affordable packages provide karte hain."
  },
  {
    title: "Aap Pricing Kaise Calculate Karte Hain?",
    content: "Hum project scope, features, custom requirements aur time estimate ke hisaab se pricing provide karte hain. Aap free quote le sakte hain."
  },
  {
    title: "Kya Aap Payment Instalments Me Accept Karte Hain?",
    content: "Haan, hum flexible payment terms offer karte hain. Normal projects me milestone-based payments hoti hain."
  },
  {
    title: "Agar Project Hone Ke BaadKoi Problem Aaye Toh Kya Karein?",
    content: "Project completion ke baad bhi hum support provide karte hain. Aap kabhi bhi contact kar sakte hain aur hum problem solve karne me help karenge."
  },
  {
    title: "Kya Aap Confidentiality Maintain Karte Hain?",
    content: "Haan, hum client data aur business information ki full confidentiality maintain karte hain. Privacy hamari priority hai."
  },
  {
    title: "Kya Aap Website Hosting & Domain Suggestion Dete Hain?",
    content: "Haan, hum aapke business ke liye best hosting and domain recommendations provide karte hain."
  },
  {
    title: "Kya Aap Existing Website Ko Faster Bana Sakte Hain?",
    content: "Bilkul. Hum performance audit, code optimization aur speed improvement se existing website ko faster bana sakte hain."
  },
  {
    title: "Kya Aap Custom ERP/CRM Solutions Banate Hain?",
    content: "Haan, hum business-specific ERP aur CRM software solutions develop karte hain jo workflows ko optimize karte hain."
  },
  {
    title: "Kya Aap Digital Marketing Support Bhi Dete Hain?",
    content: "Haan, hum SEO, SMO, paid ads aur complete digital marketing services provide karte hain."
  }
];

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Questions
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Aapke saare sawalon ke sahi aur clear jawabaat. PureTechZone se judi queries yahan explore karein.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-slate-900/40">
        <FAQContent initialData={data} />
      </section>
    </>
  );
}
