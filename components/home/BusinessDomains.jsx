"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
    FaUtensils,
    FaPlaneDeparture,
    FaHandsHelping,
    FaStore,
    FaShoppingCart,
    FaHeartbeat,
    FaBuilding,
    FaGraduationCap,
    FaWallet,
    FaTruckMoving,
    FaIndustry,
    FaDumbbell,
    FaHotel,
    FaSpa,
    FaCar,
    FaRocket,
} from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const industries = [
    {
        icon: FaUtensils,
        title: "Restaurant & Cafes",
        description: "Digital solutions for online ordering, reservations, and customer engagement.",
        gradient: "from-orange-400 to-rose-500",
        glow: "group-hover:shadow-orange-400/20",
        tag: "Food & Beverage",
    },
    {
        icon: FaPlaneDeparture,
        title: "Tour & Travel Agencies",
        description: "Booking systems, travel portals, and seamless customer experiences.",
        gradient: "from-sky-400 to-blue-600",
        glow: "group-hover:shadow-sky-400/20",
        tag: "Travel",
    },
    {
        icon: FaHandsHelping,
        title: "NGOs & Non-Profit",
        description: "Donation platforms, awareness campaigns, and volunteer management.",
        gradient: "from-emerald-400 to-teal-600",
        glow: "group-hover:shadow-emerald-400/20",
        tag: "Social Impact",
    },
    {
        icon: FaStore,
        title: "Retail Businesses",
        description: "Modern retail management systems and customer-focused solutions.",
        gradient: "from-fuchsia-400 to-purple-600",
        glow: "group-hover:shadow-fuchsia-400/20",
        tag: "Retail",
    },
    {
        icon: FaShoppingCart,
        title: "E-commerce Stores",
        description: "Scalable online stores designed to increase sales and conversions.",
        gradient: "from-violet-400 to-indigo-600",
        glow: "group-hover:shadow-violet-400/20",
        tag: "E-commerce",
    },
    {
        icon: FaHeartbeat,
        title: "Healthcare & Clinics",
        description: "Patient management, appointment booking, and healthcare portals.",
        gradient: "from-pink-400 to-rose-600",
        glow: "group-hover:shadow-pink-400/20",
        tag: "Healthcare",
    },
    {
        icon: FaBuilding,
        title: "Real Estate",
        description: "Property listing platforms with lead generation and CRM integration.",
        gradient: "from-amber-400 to-orange-600",
        glow: "group-hover:shadow-amber-400/20",
        tag: "Real Estate",
    },
    {
        icon: FaGraduationCap,
        title: "Education & Training",
        description: "E-learning platforms, LMS solutions, and student engagement tools.",
        gradient: "from-cyan-400 to-sky-600",
        glow: "group-hover:shadow-cyan-400/20",
        tag: "EdTech",
    },
    {
        icon: FaWallet,
        title: "Finance & Insurance",
        description: "Secure financial applications with compliance-ready architecture.",
        gradient: "from-lime-400 to-green-600",
        glow: "group-hover:shadow-lime-400/20",
        tag: "FinTech",
    },
    {
        icon: FaTruckMoving,
        title: "Logistics & Transportation",
        description: "Fleet tracking, logistics automation, and route optimization systems.",
        gradient: "from-yellow-400 to-amber-600",
        glow: "group-hover:shadow-yellow-400/20",
        tag: "Logistics",
    },
    {
        icon: FaIndustry,
        title: "Manufacturing",
        description: "ERP integrations and operational efficiency management solutions.",
        gradient: "from-slate-400 to-gray-600",
        glow: "group-hover:shadow-slate-400/20",
        tag: "Industry",
    },
    {
        icon: FaDumbbell,
        title: "Fitness & Wellness",
        description: "Membership systems, fitness tracking, and wellness engagement apps.",
        gradient: "from-red-400 to-rose-600",
        glow: "group-hover:shadow-red-400/20",
        tag: "Health",
    },
    {
        icon: FaHotel,
        title: "Hospitality & Hotels",
        description: "Reservation management and personalized guest experience solutions.",
        gradient: "from-purple-400 to-violet-600",
        glow: "group-hover:shadow-purple-400/20",
        tag: "Hospitality",
    },
    {
        icon: FaSpa,
        title: "Beauty & Salons",
        description: "Appointment scheduling, loyalty programs, and client management.",
        gradient: "from-pink-300 to-fuchsia-500",
        glow: "group-hover:shadow-pink-400/20",
        tag: "Beauty",
    },
    {
        icon: FaCar,
        title: "Automotive Services",
        description: "Workshop management, service booking, and customer retention tools.",
        gradient: "from-blue-400 to-indigo-600",
        glow: "group-hover:shadow-blue-400/20",
        tag: "Automotive",
    },
    {
        icon: FaRocket,
        title: "Startups & Enterprises",
        description: "Scalable digital products built for growth and innovation.",
        gradient: "from-primary to-accent",
        glow: "group-hover:shadow-primary/20",
        tag: "Startup",
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const BusinessDomains = () => {
    return (
        <section className="py-12 bg-gray-50 dark:bg-[#0c121e] relative overflow-hidden">
            {/* Subtle background orb */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">
                    {/* <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                        Industries We Serve
                    </span> */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
                        Hum Sabhi Industries Ke Liye{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Digital Solutions
                        </span>{" "}
                        Banate Hain
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                        Hum modern technology ke saath powerful websites aur apps develop karte hain jo har business ko online strong aur future-ready banate hain.
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3500}
                    transitionDuration={700}
                    pauseOnHover
                    arrows={false}
                    keyBoardControl
                    swipeable
                    draggable
                    containerClass="pb-10"
                    itemClass="px-3 py-2"
                    dotListClass="mt-6"
                >
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <article
                                key={index}
                                className={`group h-full rounded-2xl border border-slate-200/70 dark:border-white/[0.06] bg-white dark:bg-white/[0.03] backdrop-blur-sm p-6 shadow-sm hover:shadow-2xl ${industry.glow} transition-all duration-500 hover:-translate-y-1.5 overflow-hidden relative cursor-default`}
                            >
                                {/* Shimmer glow on hover */}
                                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${industry.gradient} blur-2xl -z-10 scale-90`} />

                                {/* Top: tag chip */}
                                <div className="flex items-center justify-between mb-5">
                                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${industry.gradient} text-white opacity-80`}>
                                        {industry.tag}
                                    </span>
                                    <span className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-gradient-to-br group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                                        <ArrowUpRight size={13} />
                                    </span>
                                </div>

                                {/* Icon Badge */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${industry.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300`}>
                                    <Icon size={24} />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                                    {industry.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 dark:text-gray-400 leading-relaxed text-sm min-h-[60px]">
                                    {industry.description}
                                </p>

                                {/* Bottom Accent Line */}
                                <div className={`mt-5 h-[3px] w-8 rounded-full bg-gradient-to-r ${industry.gradient} group-hover:w-16 transition-all duration-500`} />
                            </article>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default BusinessDomains;