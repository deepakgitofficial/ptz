import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ArrowUpRight,
  Zap,
  MessageSquare,
} from "lucide-react";
import {
  FaGlobe,
  FaShoppingCart,
  FaWordpress,
  FaSearch,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaChartLine,
  FaShieldAlt,
  FaRobot,
  FaCogs,
  FaWhatsapp,
} from "react-icons/fa";

export const metadata = {
  title: "Our Services | Pure Tech Zone",
  description:
    "Web development, mobile apps, SEO, e-commerce, UI/UX design, WordPress, digital marketing and more — end-to-end digital solutions by Pure Tech Zone, Baghpat.",
};

const services = [
  {
    icon: FaGlobe,
    title: "Web Development",
    slug: "web-development",
    category: "Development",
    badge: "Most Popular",
    badgeColor: "bg-primary text-white",
    gradient: "from-blue-500 to-indigo-600",
    shortDesc:
      "Custom websites aur web applications jo Next.js, React aur Node.js pe banai hain — fast, secure aur SEO-friendly.",
    features: [
      "Custom React & Next.js Applications",
      "Progressive Web Apps (PWA)",
      "Mobile-First Responsive Design",
      "API Integration & Development",
    ],
  },
  {
    icon: FaShoppingCart,
    title: "E-commerce Solutions",
    slug: "ecommerce-development",
    category: "Development",
    badge: "High ROI",
    badgeColor: "bg-emerald-500 text-white",
    gradient: "from-emerald-500 to-teal-600",
    shortDesc:
      "Online store banayein jo products sell kare, payments accept kare aur customers ko delight kare — WooCommerce ya Custom.",
    features: [
      "Shopify & WooCommerce Setup",
      "Razorpay / Stripe Payment Integration",
      "Product & Inventory Management",
      "Cart & Checkout Optimization",
    ],
  },
  {
    icon: FaWordpress,
    title: "WordPress Development",
    slug: "wordpress-development",
    category: "Development",
    badge: null,
    badgeColor: "",
    gradient: "from-sky-400 to-blue-600",
    shortDesc:
      "Professional WordPress websites with custom themes, plugins aur easy CMS management — no coding knowledge needed.",
    features: [
      "Custom Theme & Plugin Development",
      "WooCommerce Integration",
      "Speed & Performance Optimization",
      "Security Hardening & Backups",
    ],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "Development",
    badge: "Trending",
    badgeColor: "bg-violet-500 text-white",
    gradient: "from-violet-500 to-purple-700",
    shortDesc:
      "Android aur iOS ke liye cross-platform mobile apps jo aapke business ko user ke haath mein le jaayein.",
    features: [
      "React Native Cross-Platform Apps",
      "Android & iOS Deployment",
      "Push Notifications & Offline Support",
      "App Store Optimization (ASO)",
    ],
  },
  {
    icon: FaSearch,
    title: "SEO & Local SEO",
    slug: "seo-services",
    category: "Marketing",
    badge: "Best Seller",
    badgeColor: "bg-orange-500 text-white",
    gradient: "from-orange-400 to-rose-500",
    shortDesc:
      "Google pe top rank karayein — Local SEO, Google Business Profile, keyword research aur on-page optimization.",
    features: [
      "Google Business Profile Optimization",
      "Technical & On-Page SEO",
      "Keyword Research & Content Strategy",
      "Core Web Vitals & Speed Audit",
    ],
  },
  {
    icon: FaChartLine,
    title: "Digital Marketing",
    slug: "digital-marketing",
    category: "Marketing",
    badge: null,
    badgeColor: "",
    gradient: "from-pink-500 to-fuchsia-600",
    shortDesc:
      "Social media marketing, paid ads, email campaigns aur brand building jo real results deta hai.",
    features: [
      "Facebook & Instagram Ads",
      "Google PPC Campaigns",
      "Email Marketing Automation",
      "Social Media Management (SMO)",
    ],
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    category: "Design",
    badge: null,
    badgeColor: "",
    gradient: "from-amber-400 to-orange-500",
    shortDesc:
      "Beautiful, user-friendly interfaces design karte hain jo first impression se hi impress kar dein aur conversions badhayein.",
    features: [
      "Wireframing & Prototyping (Figma)",
      "User Research & Journey Mapping",
      "Mobile-First Design Systems",
      "Landing Page & Conversion Design",
    ],
  },
  {
    icon: FaCogs,
    title: "ERP & CRM Solutions",
    slug: "erp-crm-solutions",
    category: "Enterprise",
    badge: "Enterprise",
    badgeColor: "bg-slate-700 text-white",
    gradient: "from-slate-500 to-gray-700",
    shortDesc:
      "Business workflows automate karo — custom ERP software, CRM tools aur operational management platforms.",
    features: [
      "Custom ERP System Development",
      "CRM & Lead Management",
      "Inventory & HR Automation",
      "Reports & Dashboard Integration",
    ],
  },
  {
    icon: FaServer,
    title: "Web Hosting & Deployment",
    slug: "hosting-deployment",
    category: "Infrastructure",
    badge: null,
    badgeColor: "",
    gradient: "from-cyan-400 to-sky-600",
    shortDesc:
      "Fast aur secure hosting setup, VPS configuration, domain management aur CI/CD deployment pipelines.",
    features: [
      "VPS & Cloud Hosting Setup",
      "Domain & SSL Configuration",
      "Vercel / Netlify / AWS Deployment",
      "24/7 Uptime Monitoring",
    ],
  },
  {
    icon: FaShieldAlt,
    title: "Website Maintenance",
    slug: "website-maintenance",
    category: "Support",
    badge: null,
    badgeColor: "",
    gradient: "from-lime-500 to-green-600",
    shortDesc:
      "Existing website ko fast, secure aur updated rakhne ke liye regular maintenance, bug fixes aur performance tuning.",
    features: [
      "Security Patches & Updates",
      "Bug Fixes & Feature Additions",
      "Performance & Speed Optimization",
      "Regular Backups & Recovery",
    ],
  },
  {
    icon: FaRobot,
    title: "AI & Automation Solutions",
    slug: "ai-automation",
    category: "Enterprise",
    badge: "New",
    badgeColor: "bg-gradient-to-r from-primary to-accent text-white",
    gradient: "from-primary to-accent",
    shortDesc:
      "AI chatbots, workflow automation aur smart tools jo aapka time bachate hain aur business efficiency badhate hain.",
    features: [
      "AI Chatbot Integration",
      "WhatsApp & Email Automation",
      "Lead Generation Bots",
      "Data Scraping & Analysis Tools",
    ],
  },
  {
    icon: FaChartLine,
    title: "Content Writing & Copywriting",
    slug: "content-writing",
    category: "Marketing",
    badge: null,
    badgeColor: "",
    gradient: "from-rose-400 to-pink-600",
    shortDesc:
      "SEO-optimized blogs, website copy, product descriptions aur social media content jo audience ko engage kare.",
    features: [
      "SEO Blog & Article Writing",
      "Website & Landing Page Copy",
      "Product Descriptions",
      "Social Media Content Calendar",
    ],
  },
];

const categories = ["All", "Development", "Marketing", "Design", "Enterprise", "Infrastructure", "Support"];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "12+", label: "Services Offered" },
];

export default function ServicesOverviewPage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-16 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
            <Zap className="w-3.5 h-3.5" />
            End-to-End Digital Solutions
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Aapke Business Ke Liye{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Hamari Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Website se lekar mobile app, SEO se lekar AI automation — hum aapke
            business ke liye sab kuch handle karte hain.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              Free Consultation Lein
            </Link>
            <a
              href="https://wa.me/918171654421"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Karein
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-white dark:bg-[#0a0f1c] border-y border-gray-100 dark:border-white/[0.06]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 dark:divide-white/[0.06]">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center py-8 px-4">
                <p className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">
                  {value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-20 bg-gray-50 dark:bg-[#0a0f1c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          {/* Section header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              12+ Services —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Ek Hi Jagah
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aapko alag alag agencies ki zaroorat nahi. Hum sab kuch handle karte hain.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.slug}
                  className={`group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/[0.06] rounded-3xl p-7 hover:shadow-2xl hover:border-primary hover:-translate-y-1.5 transition-all duration-500 overflow-hidden backdrop-blur-sm`}
                >
                  {/* Background glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100  blur-2xl -z-10 scale-75 transition-opacity duration-500`} />

                  {/* Badge */}
                  <div className="flex items-start justify-between mb-6">
                    {service.badge ? (
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                        {service.category}
                      </span>
                    )}

                    {/* Arrow icon */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 group-hover:bg-gradient-to-br group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-[-4deg] transition-all duration-300`}>
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300"
                  >
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full rounded-b-3xl bg-gradient-to-r ${service.gradient} transition-all duration-500`} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-16 bg-white dark:bg-[#060b14]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            PureTechZone Ko{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Kyun Choose Karein?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Sirf design nahi — hum results deliver karte hain. Har service mein quality, transparency aur timely delivery guaranteed hai.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "⚡", title: "Fast Delivery", desc: "Projects time par ya pehle deliver karte hain." },
              { emoji: "💰", title: "Affordable Pricing", desc: "Small businesses ke liye budget-friendly packages." },
              { emoji: "🛡️", title: "Post-Launch Support", desc: "Delivery ke baad bhi full support milega." },
              { emoji: "📈", title: "Result-Driven", desc: "Sirf website nahi — growth aur results pe focus." },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50 dark:bg-white/[0.02] hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl mb-3">{emoji}</div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Apna Project Start Karte Hain?
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Aaj hi free consultation book karein. Hum aapke business ke liye best digital solution suggest karenge — bilkul free.
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
