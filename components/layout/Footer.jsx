import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MapPin, Phone, Mail, ArrowUpRight, Zap } from "lucide-react";
import { MdPlaylistAddCheckCircle } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  // { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "SEO & Digital Marketing", href: "/services" },
  // { label: "E-commerce Solutions", href: "/services" },
  // { label: "UI/UX Design", href: "/services" },
  // { label: "ERP / CRM Solutions", href: "/services" },
];

const supportLinks = [
  { label: "FAQ", href: "/faq" },
  { label: 'Useful Tools', href: 'https://ptz-tools.vercel.app', },
  // { label: "Privacy Policy", href: "/privacy-policy" },
  // { label: "Terms of Service", href: "/terms-of-service" },
  // { label: "Get Free Quote", href: "/contact" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
    hoverColor: "hover:bg-orange-600",
  },
  {
    icon: FaXTwitter,
    href: "#",
    label: "Twitter / X",
    hoverColor: "hover:bg-neutral-800",
  },
  // {
  //   icon: FaInstagram,
  //   href: "#",
  //   label: "Instagram",
  //   hoverColor: "hover:bg-gradient-to-br hover:from-pink-500 hover:to-orange-400",
  // },
  {
    icon: FaLinkedinIn,
    href: "#",
    label: "LinkedIn",
    hoverColor: "hover:bg-sky-700",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/918171654421",
    label: "WhatsApp",
    hoverColor: "hover:bg-emerald-600",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f8fafc] dark:bg-[#060b14] text-gray-600 dark:text-gray-400 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-primary/8 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Top CTA Banner ── */}
        <div className="border-b border-gray-200 dark:border-white/[0.06] py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-0.5">
                  Ready to Grow Online?
                </p>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  Apna Free Quote Abhi Lein — 100% Free Consultation
                </h3>
              </div>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Start Your Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Pure Tech Zone
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
              Baghpat, UP se ek passionate team — har business ke liye affordable, modern aur result-driven digital solutions.
            </p>

            {/* Contact mini-list */}
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">
                  Baghpat, Uttar Pradesh, India 250609
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+918171654421"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  +91 81716 54421
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:deepsoftskills@gmail.com"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  deepsoftskills@gmail.com
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ icon: Icon, href, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-xl border border-gray-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.03] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:border-transparent ${hoverColor} transition-all duration-300 hover:scale-110`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Support */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA card */}
            <a
              href="https://wa.me/918171654421"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition-all duration-300 group"
            >
              <div className="rounded-xl bg-emerald-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MdPlaylistAddCheckCircle className="text-white " size={30} />
              </div>
              <div>
                <Link href="https://ptz-tools.vercel.app" target="_blank" rel="noopener noreferrer">
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    Other Useful Tools
                  </p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-500">
                    Daily life me use hone wale tools
                  </p>
                </Link>
              </div>
            </a>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-gray-200 dark:border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {currentYear}{" "}
            <span className="font-semibold text-gray-600 dark:text-gray-400">
              Pure Tech Zone
            </span>
            . All rights reserved. Made with ❤️ in Baghpat, India.
          </p>
          <div className="flex items-center gap-5 text-xs text-gray-400 dark:text-gray-500">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
