import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Laptop, Settings, ExternalLink } from 'lucide-react';
import { FaWordpress, FaGlobe } from 'react-icons/fa';
import { IoDesktopOutline } from 'react-icons/io5';
import Image from 'next/image';



const ServicesSection = () => {

  const services = [
    {
      title: 'Website Development',
      img: '/services/web2.webp',
      badge: 'High Conversion',
      desc: 'Hum modern websites design aur develop karte hain jo aapke business ko online strong banati hain aur zyada customers tak pahunchne me help karti hain.',
      path: '/services/web-development',
      features: [
        'Google Me Better Ranking',
        'Fast Loading Speed',
        'Mobile Friendly Design',
        'Zyada Customers Lane Ke Liye Optimized'
      ],
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'rgba(34, 115, 163, 0.15)',
      illustration: (
        <div className="relative w-full h-32 bg-gray-100 dark:bg-slate-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col p-2">
          {/* Browser Header */}
          <div className="flex items-center gap-1.5 pb-2 border-b border-gray-200 dark:border-gray-800">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            <div className="h-3.5 flex-1 bg-white dark:bg-slate-800 rounded text-[7px] text-gray-400 dark:text-gray-500 flex items-center px-2 font-mono truncate">
              https://yourbusiness.com
            </div>
          </div>
          {/* Browser Content */}
          <div className="flex-1 flex flex-col justify-between pt-2">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="h-2 w-16 bg-primary/40 dark:bg-primary/30 rounded mb-1"></div>
                <div className="h-1.5 w-24 bg-gray-300 dark:bg-slate-700 rounded mb-1"></div>
                <div className="h-1 w-20 bg-gray-300 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-500">
                <FaGlobe className="w-4 h-4 animate-spin-slow" />
              </div>
            </div>
            {/* Visual grid representing content cards */}
            <div className="grid grid-cols-3 gap-1 pt-2">
              <div className="h-5 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700 p-0.5 flex flex-col justify-between">
                <div className="h-1 w-full bg-gray-200 dark:bg-slate-600 rounded"></div>
                <div className="h-1 w-2/3 bg-gray-200 dark:bg-slate-600 rounded"></div>
              </div>
              <div className="h-5 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700 p-0.5 flex flex-col justify-between">
                <div className="h-1 w-full bg-gray-200 dark:bg-slate-600 rounded"></div>
                <div className="h-1 w-2/3 bg-gray-200 dark:bg-slate-600 rounded"></div>
              </div>
              <div className="h-5 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700 p-0.5 flex flex-col justify-between">
                <div className="h-1 w-full bg-gray-200 dark:bg-slate-600 rounded"></div>
                <div className="h-1 w-2/3 bg-gray-200 dark:bg-slate-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Mobile Apps Development',
      badge: 'Easy to Manage',
      img: '/mobile-dev.jpg',
      desc: 'Hum powerful mobile apps create karte hain jo aapke business ko online grow karne, customers tak jaldi pahunchne aur behtar service dene me help karti hain.',

      features: [
        'Android aur iOS App Support',
        'Simple aur Attractive Design',
        'Fast aur Smooth Working',
        'Safe aur Secure App System'
      ],
      path: '/services/wordpress-development',
      color: 'from-blue-600 to-indigo-500',
      glowColor: 'rgba(59, 130, 246, 0.15)',
      illustration: (
        <div className="relative w-full h-32 bg-gray-100 dark:bg-slate-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col p-2">
          {/* WP Admin Header bar */}
          <div className="flex items-center justify-between pb-1 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-1">
              <FaWordpress className="w-3.5 h-3.5 text-blue-500" />
              <div className="h-2 w-12 bg-gray-300 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            </div>
          </div>
          {/* Dashboard Panel layout */}
          <div className="flex-1 flex gap-1.5 pt-1.5">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-200 dark:bg-slate-800 rounded p-1 flex flex-col gap-1">
              <div className="h-1 w-full bg-blue-500/30 rounded"></div>
              <div className="h-1 w-4/5 bg-gray-300 dark:bg-slate-700 rounded"></div>
              <div className="h-1 w-3/4 bg-gray-300 dark:bg-slate-700 rounded"></div>
              <div className="h-1 w-5/6 bg-gray-300 dark:bg-slate-700 rounded"></div>
            </div>
            {/* Main view with settings widgets */}
            <div className="flex-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 rounded p-1.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="h-1.5 w-16 bg-gray-300 dark:bg-slate-700 rounded"></div>
                <div className="w-5 h-2.5 bg-blue-500 rounded-full p-0.5 flex justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                </div>
              </div>
              <div className="h-1.5 w-full bg-gray-100 dark:bg-slate-900 rounded border border-gray-200 dark:border-gray-800 flex items-center px-1">
                <div className="h-0.5 w-2/3 bg-green-500 rounded"></div>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className="h-4 bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded p-0.5 flex items-center justify-center">
                  <div className="h-1 w-4 bg-gray-300 dark:bg-slate-600 rounded"></div>
                </div>
                <div className="h-4 bg-blue-500 rounded p-0.5 flex items-center justify-center">
                  <div className="h-1 w-4 bg-white/80 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Web Application Development',
      img: '/services/web-dev.webp',
      badge: 'Ultimate Performance',
      desc: 'Hum advanced web applications create karte hain jo fast kaam karti hain, secure hoti hain aur users ko behtar online experience deti hain.',
      features: [
        'Modern Technology Based Development',
        'Fast Loading Performance',
        'Live Data aur API Connection',
        'Safe aur Secure Platform'
      ],
      path: '/services/web-development',
      color: 'from-indigo-500 to-purple-500',
      glowColor: 'rgba(99, 102, 241, 0.15)',
      illustration: (
        <div className="relative w-full h-32 bg-gray-100 dark:bg-slate-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col p-2">
          {/* App Shell Header */}
          <div className="flex justify-between items-center pb-1 border-b border-gray-200 dark:border-gray-800">
            <div className="h-2.5 w-16 bg-indigo-500/20 rounded border border-indigo-500/30 flex items-center justify-center">
              <div className="h-1 w-10 bg-indigo-500 rounded-sm"></div>
            </div>
            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          </div>
          {/* Dynamic dashboard mock */}
          <div className="flex-1 grid grid-cols-3 gap-1.5 pt-1.5">
            {/* Visual Stat Ring Card */}
            <div className="col-span-1 bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 rounded p-1 flex flex-col justify-between items-center">
              <div className="w-6 h-6 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin-slow flex items-center justify-center">
                <span className="text-[5px] font-bold text-indigo-500">85%</span>
              </div>
              <div className="h-1 w-full bg-gray-300 dark:bg-slate-700 rounded mt-0.5"></div>
            </div>
            {/* Chart Bars Card */}
            <div className="col-span-2 bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 rounded p-1 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <div className="h-1 w-10 bg-gray-300 dark:bg-slate-700 rounded"></div>
                <div className="h-1 w-6 bg-green-500/20 text-[5px] text-green-500 font-bold px-0.5 rounded flex items-center justify-center">+12%</div>
              </div>
              <div className="flex items-end justify-between h-8 px-1 pb-0.5">
                <span className="w-1.5 h-3 bg-gray-300 dark:bg-slate-800 rounded-sm"></span>
                <span className="w-1.5 h-5 bg-gray-300 dark:bg-slate-800 rounded-sm"></span>
                <span className="w-1.5 h-7 bg-indigo-500 rounded-sm"></span>
                <span className="w-1.5 h-4 bg-gray-300 dark:bg-slate-800 rounded-sm"></span>
                <span className="w-1.5 h-6 bg-indigo-400 rounded-sm"></span>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-transparent to-gray-50/30 dark:to-slate-950/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary dark:text-white font-semibold text-xs tracking-wider uppercase mb-4 border border-primary/20">
            <Globe className="w-3.5 h-3.5" /> Hum Kya Karte Hain
          </div> */}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
            Hamari
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Services
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Hum modern Website aur Mobile Apps banate hain jo aapke business ko online grow karne aur zyada customers tak pahunchane me help karte hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl bg-white dark:bg-[#111827]/40 border border-gray-200/80 dark:border-gray-800/80 backdrop-blur-xl p-4 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              style={{
                '--glow-color': service.glowColor
              }}
            >
              {/* Radial gradient glow behind card on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>

              <div>


                {/* Animated Interactive Mockup */}
                <div className="mb-6 transform group-hover:scale-[1.02] transition-all duration-500 ease-out">
                  {/* {service.img} */}
                  <img src={service.img} alt="Mobile App Development" className='aspect-video w-full h-[200px] object-cover rounded-lg' />

                </div>

                {/* Title */}
                <h4 className="text-2xl font-bold mb-3 text-foreground font-heading tracking-tight group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Key Features List */}
                <ul className="space-y-2.5 mb-8 border-t border-gray-100 dark:border-gray-800/60 pt-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Action Button */}
              <Link
                href={service.path}
                className="mt-auto group/btn inline-flex items-center text-white justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary dark:bg-slate-900/60 dark:hover:bg-primary  hover:text-white dark:text-gray-200 dark:hover:text-white font-semibold text-sm transition-all duration-300 border border-gray-100 dark:border-gray-800/80 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-md"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

    </section>

  );
};

export default ServicesSection;

