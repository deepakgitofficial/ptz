import React from "react";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle,
  Code,
  Zap,
  Users,
  ShieldCheck,
  Clock,
  TrendingUp,
  MessageSquare,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "About Us | Pure Tech Zone",
  description:
    "Pure Tech Zone ke baare mein jaanein — Baghpat ki ek passionate web development team jo local aur global businesses ke liye fast, secure aur beautiful digital solutions banati hai.",
};

const stats = [
  { value: "150+", label: "Projects Delivered", color: "from-primary to-indigo-600" },
  { value: "50+", label: "Happy Clients", color: "from-emerald-500 to-teal-600" },
  { value: "5+", label: "Years Experience", color: "from-violet-500 to-purple-700" },
  { value: "98%", label: "Client Satisfaction", color: "from-orange-400 to-rose-500" },
];

const values = [
  {
    icon: Target,
    title: "Hamara Mission",
    desc: "Local aur global businesses ko fast, secure aur beautiful digital platforms se empower karna jo unki real growth accelerate kare.",
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-500/10",
  },
  {
    icon: Eye,
    title: "Hamara Vision",
    desc: "Baghpat aur UP ka sabse trusted digital agency banna — jo boundaries push kare aur results deliver kare.",
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-500/10",
  },
  {
    icon: Heart,
    title: "Hamari Passion",
    desc: "Hum sirf code nahi likhte — hum har project mein apna dil lagate hain. Quality, honesty aur creativity hamare kaam ki pehchaan hai.",
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50 dark:bg-pink-500/10",
  },
];

const whyPoints = [
  { icon: Zap, title: "Fast Delivery", desc: "Projects time par ya pehle deliver hote hain — hamesha." },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "Har project me premium code standards aur thorough testing." },
  { icon: Users, title: "Dedicated Team", desc: "Aapko ek personal point-of-contact milta hai, agency ke nahi." },
  { icon: Clock, title: "24/7 Support", desc: "Launch ke baad bhi hum aapke saath hain — kabhi bhi help milegi." },
  { icon: TrendingUp, title: "Result-Driven", desc: "Design nahi, results pe focus — traffic, leads aur conversions." },
  { icon: Code, title: "Modern Tech Stack", desc: "Next.js, React, Node.js — aapka project future-ready hoga." },
];

const timeline = [
  {
    year: "2020",
    title: "Pure Tech Zone Ki Shuruaat",
    desc: "Deepak ne Baghpat se Pure Tech Zone ki founding ki — ek passion ke saath ki har local business ko online strong banana hai.",
  },
  {
    year: "2021",
    title: "Pehle 10 Projects Complete",
    desc: "Schools, shops aur local businesses ke liye websites banayein aur trust kamaaya — word-of-mouth se growth shuru hui.",
  },
  {
    year: "2022",
    title: "Services Expand Ki",
    desc: "Web development ke saath Mobile App, SEO aur Digital Marketing services bhi launch kiye. Team bhi expand hui.",
  },
  {
    year: "2023",
    title: "50+ Happy Clients",
    desc: "50 se zyada clients ke saath trusted partnership ban chuki thi. E-commerce aur ERP solutions bhi add hue.",
  },
  {
    year: "2024",
    title: "AI & Automation Launch",
    desc: "AI chatbots, WhatsApp automation aur custom ERP solutions launch kiye. 100+ projects milestone reach kiya.",
  },
  {
    year: "2025+",
    title: "Aage Badhte Hain",
    desc: "Abhi bhi grow ho rahe hain — naye clients, naye services aur India ke top digital agencies mein jagah banana hai.",
  },
];

const techStack = [
  { name: "Next.js", emoji: "⚡" },
  { name: "React", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "WordPress", emoji: "🅦" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "MySQL", emoji: "🗃️" },
  { name: "React Native", emoji: "📱" },
  { name: "Figma", emoji: "🖼️" },
  { name: "Vercel", emoji: "▲" },
  { name: "AWS", emoji: "☁️" },
  { name: "SEO Tools", emoji: "📈" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-16 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            <MapPin className="w-3.5 h-3.5" /> Baghpat, Uttar Pradesh
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Pure Tech Zone
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hum ek passionate team hain jo businesses ko online grow karne mein help karta hai — modern websites, apps aur digital marketing ke zariye.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              Hum Se Baat Karein
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 font-semibold text-sm hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Our Work Dekhein <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white dark:bg-[#0a0f1c] border-y border-gray-100 dark:border-white/[0.06]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-white/[0.06]">
            {stats.map(({ value, label, color }) => (
              <div key={label} className="text-center py-8 px-4 group">
                <p className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${color} mb-1 group-hover:scale-110 transition-transform inline-block`}>
                  {value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Code Visual */}
            <div className="relative">
              <div className="rounded-3xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-[#0d1117] p-6 shadow-xl relative overflow-hidden">
                {/* Window controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400 font-mono">index.js — Pure Tech Zone</span>
                </div>
                <div className="font-mono text-sm space-y-2 leading-relaxed">
                  <p><span className="text-violet-500">import</span> <span className="text-gray-800 dark:text-gray-200">React</span> <span className="text-violet-500">from</span> <span className="text-emerald-500">'react'</span>;</p>
                  <p><span className="text-violet-500">import</span> <span className="text-gray-800 dark:text-gray-200">{"{ PureTechZone }"}</span> <span className="text-violet-500">from</span> <span className="text-emerald-500">'./baghpat'</span>;</p>
                  <p className="text-gray-400">{"//"} Building dreams since 2020</p>
                  <br />
                  <p><span className="text-blue-400">const</span> <span className="text-yellow-400">buildYourBusiness</span> = () {"=>"} {"{"}</p>
                  <p className="pl-6"><span className="text-blue-400">return</span> (</p>
                  <p className="pl-10 text-emerald-400">{"<"}PureTechZone</p>
                  <p className="pl-14 text-orange-400">quality=<span className="text-emerald-500">"premium"</span></p>
                  <p className="pl-14 text-orange-400">speed=<span className="text-emerald-500">"blazing-fast"</span></p>
                  <p className="pl-14 text-orange-400">seo=<span className="text-emerald-500">"optimized"</span></p>
                  <p className="pl-14 text-orange-400">support=<span className="text-emerald-500">"24/7"</span></p>
                  <p className="pl-10 text-emerald-400">{"/>"}</p>
                  <p className="pl-6">);</p>
                  <p>{"}"}</p>
                </div>
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 shadow-xl rounded-2xl px-5 py-3 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white text-sm">150+ Projects</p>
                  <p className="text-xs text-gray-500">Successfully Delivered</p>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-5 -right-5 bg-gradient-to-r from-primary to-accent text-white shadow-xl rounded-2xl px-4 py-2.5 text-xs font-bold">
                ⚡ Next.js + React
              </div>
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-primary">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-tight">
                  Ek Chhoti Shuruaat,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Bada Sapna
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-4">
                  Pure Tech Zone ki shuruaat 2020 mein Baghpat, UP se hui — ek simple vision ke saath: har local business ko online ek strong presence dena, chahe budget kuch bhi ho.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  Aaj hum 150+ projects successfully deliver kar chuke hain — schools, hospitals, retail shops, startups, real estate firms aur bade enterprises ke saath kaam kiya hai. Hum sirf websites nahi banate — hum aapke business ke digital partner hain.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "2020 mein Baghpat se pure passion ke saath shuru kiya",
                  "Experienced developers, designers aur digital strategists ki team",
                  "150+ projects aur 50+ satisfied clients across India",
                  "Every project mein quality, transparency aur timely delivery",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all duration-300 text-sm"
              >
                Hamara Portfolio Dekhein <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-20 bg-gray-50 dark:bg-[#0c121e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-tight">
              Jo Cheezein Hume{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Aage Badhati Hain
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {values.map(({ icon: Icon, title, desc, gradient, bg }) => (
              <div
                key={title}
                className="group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-3xl p-8 text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-400 overflow-hidden"
              >
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${gradient} blur-3xl -z-10 scale-75 transition-opacity duration-500`} />
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                <div className={`mt-5 h-[3px] w-8 rounded-full bg-gradient-to-r ${gradient} group-hover:w-16 mx-auto transition-all duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 leading-tight">
              PureTechZone Ko Kyun{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Choose Karein?
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Hum sirf service providers nahi — aapke digital success ke dedicated partners hain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex items-start gap-5 p-6 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.06] rounded-2xl hover:border-primary/30 hover:shadow-lg hover:bg-white dark:hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="py-20 bg-gray-50 dark:bg-[#0c121e]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">
              2020 Se{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Aaj Tak
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/10 md:-translate-x-px" />

            <div className="space-y-10">
              {timeline.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/30 md:-translate-x-1/2 mt-1.5 z-10" />

                  {/* Year label */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <span className="inline-block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">
                      {year}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] pl-14 md:pl-0`}>
                    <div className="bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-16 bg-white dark:bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-primary">Tech Stack</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 mb-10">
            Technologies We Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(({ name, emoji }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.02] text-sm font-semibold text-slate-700 dark:text-gray-300 hover:border-primary/40 hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <span>{emoji}</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal-700" />
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Milte Hain Aur Aapka Project Shuru Karte Hain!
          </h2>
          <p className="text-white/85 text-lg max-w-xl mx-auto mb-10">
            Free consultation ke liye aaj hi connect karein. Hum aapke sapne ko digital reality mein badal denge.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918171654421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-colors shadow-xl"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
