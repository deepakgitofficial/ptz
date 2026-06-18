
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code } from 'lucide-react';
import TypingEffect from '../ui/TypeingEffect';
import EnqueryForm from "../home/EnqueryForm"


const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py20  overflow-hidden min-h-[80vh] flex items-center justify-center">

      {/* Background Video & Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 mix-blend-multiply" />

        {/* Decorative blobs (optional, keeping your original gradients but lowered opacity) */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className=" relative z-10 mx-auto px-4 sm:px-6 lg:px-8 container">
        <div className="flex flex-col lg:flex-row items-center gap-8">

          <div className="lg:flex-[7] w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-[30px] rounded-[15px] shadow-[0_15px_35px_rgba(0,0,0,0.2)]">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-white font-medium text-lg mb-6 border border-primary/20 backdrop-blur-sm">
                Business Aapka, Technology Hamari
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white  mb-6 leading-tight font-heading" >
                {/* <TypingEffect /> */}

                Website Banwao, Business Badhao
              </h1>

              <p className="text-lg md:text-xl text-white dark:text-gray-100 mb-8 leading-relaxed">
                PureTechZone ke saath professional website, app jo aapke business ko Online laaye.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-center hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:-translate-y-1 flex items-center justify-center group">
                  Contact Karein
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                {/* <Link href="/portfolio" className="px-8 py-4 rounded-full bg-white dark:bg-[#1a1a1a] text-foreground font-bold text-center border-2 border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all">
                View Portfolio
              </Link> */}
              </div>

            </div>
          </div>

          {/* enquery form */}
          <div className="relative lg:flex-[3] w-full">
            <div className="get-in-touch">
              <EnqueryForm />
            </div>
          </div>
        </div>
      </div>



      {/* <div className="glass dark:glass-dark rounded-2xl p-6 relative overflow-hidden h-[400px]">
     
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div> 
              <div className="font-mono text-sm text-gray-700 dark:text-gray-300 space-y-4">
                <div className="flex items-center text-primary mb-2">
                  <Code className="w-4 h-4 mr-2" />
                  <span>index.js</span>
                </div>
                <p><span className="text-purple-500">import</span> React <span className="text-purple-500">from</span> 'react';</p>
                <p><span className="text-purple-500">import</span> {'{'} PureTechZone {'}'} <span className="text-purple-500">from</span> './agency';</p>
                <br />
                <p><span className="text-blue-500">const</span> buildWebsite = () =&gt; {'{'}</p>
                <p className="pl-4">return (</p>
                <p className="pl-8 text-green-600 dark:text-green-400">&lt;PureTechZone</p>
                <p className="pl-12 text-yellow-600 dark:text-yellow-400">quality="premium"</p>
                <p className="pl-12 text-yellow-600 dark:text-yellow-400">speed="blazing-fast"</p>
                <p className="pl-12 text-yellow-600 dark:text-yellow-400">seo="optimized"</p>
                <p className="pl-8 text-green-600 dark:text-green-400">/&gt;</p>
                <p className="pl-4">);</p>
                <p>{'}'};</p>
              </div> 
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"></div>
            </div> 
            <div className="absolute -bottom-6 -left-6 glass dark:glass-dark p-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="font-bold text-foreground">50+ Projects</p>
                <p className="text-xs text-gray-500">Successfully Delivered</p>
              </div>
            </div> */}

    </section>
  );
};

export default HeroSection;
