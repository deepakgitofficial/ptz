
"use client "
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

const industries = [
    {
        icon: FaUtensils,
        title: "Restaurant & Cafes",
        description:
            "Digital solutions for online ordering, reservations, and customer engagement.",
    },
    {
        icon: FaPlaneDeparture,
        title: "Tour & Travel Agencies",
        description:
            "Booking systems, travel portals, and seamless customer experiences.",
    },
    {
        icon: FaHandsHelping,
        title: "NGOs & Non-Profit",
        description:
            "Donation platforms, awareness campaigns, and volunteer management.",
    },
    {
        icon: FaStore,
        title: "Retail Businesses",
        description:
            "Modern retail management systems and customer-focused solutions.",
    },
    {
        icon: FaShoppingCart,
        title: "E-commerce Stores",
        description:
            "Scalable online stores designed to increase sales and conversions.",
    },
    {
        icon: FaHeartbeat,
        title: "Healthcare & Clinics",
        description:
            "Patient management, appointment booking, and healthcare portals.",
    },
    {
        icon: FaBuilding,
        title: "Real Estate",
        description:
            "Property listing platforms with lead generation and CRM integration.",
    },
    {
        icon: FaGraduationCap,
        title: "Education & Training",
        description:
            "E-learning platforms, LMS solutions, and student engagement tools.",
    },
    {
        icon: FaWallet,
        title: "Finance & Insurance",
        description:
            "Secure financial applications with compliance-ready architecture.",
    },
    {
        icon: FaTruckMoving,
        title: "Logistics & Transportation",
        description:
            "Fleet tracking, logistics automation, and route optimization systems.",
    },
    {
        icon: FaIndustry,
        title: "Manufacturing",
        description:
            "ERP integrations and operational efficiency management solutions.",
    },
    {
        icon: FaDumbbell,
        title: "Fitness & Wellness",
        description:
            "Membership systems, fitness tracking, and wellness engagement apps.",
    },
    {
        icon: FaHotel,
        title: "Hospitality & Hotels",
        description:
            "Reservation management and personalized guest experience solutions.",
    },
    {
        icon: FaSpa,
        title: "Beauty & Salons",
        description:
            "Appointment scheduling, loyalty programs, and client management.",
    },
    {
        icon: FaCar,
        title: "Automotive Services",
        description:
            "Workshop management, service booking, and customer retention tools.",
    },
    {
        icon: FaRocket,
        title: "Startups & Enterprises",
        description:
            "Scalable digital products built for growth and innovation.",
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
        <section className="py-12 bg-gray-50 dark:bg-[#0c121e]">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-14">


                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 dark:text-gray-400">
                        Helping Businesses Across All Domains
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed dark:text-gray-400">
                        We deliver innovative digital solutions tailored to businesses of
                        every industry, helping brands grow, engage customers, and achieve
                        measurable results.
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3500}
                    transitionDuration={3000}

                    pauseOnHover
                    arrows
                    keyBoardControl
                    swipeable
                    draggable
                    containerClass="pb-10"
                    itemClass="px-3"
                    dotListClass="mt-6"

                >
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <article
                                key={index}
                                className="group h-full  rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative"
                            >
                                {/* Gradient Hover Layer */}
                                {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 via-transparent to-violet-50 transition-opacity duration-300" /> */}

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
                                        <Icon size={28} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-400 mb-3">
                                        {industry.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed text-sm min-h-[70px] dark:text-gray-400">
                                        {industry.description}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] group-hover:w-20 transition-all duration-300" />
                                </div>
                            </article>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
};

export default BusinessDomains;