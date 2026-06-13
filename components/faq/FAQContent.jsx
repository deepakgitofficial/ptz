"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, HelpCircle, ArrowRight, MessageSquare, Phone, Mail, FileText, Settings, CreditCard, Clock } from "lucide-react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const CATEGORIES = [
  { id: "all", name: "All FAQs", icon: HelpCircle },
  { id: "services", name: "Services", icon: Settings },
  { id: "pricing", name: "Pricing & Plans", icon: CreditCard },
  { id: "support", name: "Timeline & Support", icon: Clock },
];

export default function FAQContent({ initialData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);

  // Categorized data mapping
  const faqData = useMemo(() => {
    return initialData.map((item, idx) => {
      // Determine category based on content keywords
      let category = "services";
      const titleLower = item.title.toLowerCase();
      const contentLower = item.content.toLowerCase();

      if (
        titleLower.includes("reply") ||
        titleLower.includes("contact") ||
        titleLower.includes("confidentiality") ||
        titleLower.includes("privacy") ||
        titleLower.includes("start karne")
      ) {
        category = "support"; // General & Support
      } else if (
        titleLower.includes("price") ||
        titleLower.includes("pricing") ||
        titleLower.includes("budget") ||
        titleLower.includes("instalment") ||
        titleLower.includes("affordable") ||
        titleLower.includes("pay")
      ) {
        category = "pricing";
      } else if (
        titleLower.includes("time") ||
        titleLower.includes("support") ||
        titleLower.includes("din me") ||
        titleLower.includes("problem") ||
        titleLower.includes("maintenance")
      ) {
        category = "support";
      }

      return {
        ...item,
        originalIndex: idx,
        category,
      };
    });
  }, [initialData]);

  // Filter based on search and category
  const filteredData = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqData, selectedCategory, searchQuery]);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      {/* Search Bar & Stats */}
      <div className="max-w-3xl mx-auto mb-12 px-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Apna sawal search karein... (e.g., SEO, Website, Price)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-900 text-foreground placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm hover:border-gray-300 dark:hover:border-gray-700 transition-all text-base md:text-lg"
          />
        </div>
        
        {searchQuery && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 pl-2">
            Found {filteredData.length} matches for "{searchQuery}"
          </p>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4 max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setOpenIndex(0); // reset open index
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                  : "bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-900 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accordion List */}
        <div className="lg:col-span-8 space-y-4">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.originalIndex}
                  className={`border border-gray-200/60 dark:border-gray-800/60 rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-primary/[0.03] border-primary/30 dark:bg-primary/[0.02] dark:border-primary/20 shadow-md shadow-primary/[0.02]"
                      : "bg-white dark:bg-slate-950 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm"
                  }`}
                >
                  <button
                    className="w-full text-left p-5 md:p-6 flex justify-between items-center text-foreground cursor-pointer transition-colors font-heading select-none outline-none group"
                    onClick={() => handleToggle(index)}
                  >
                    <span
                      className={`font-semibold text-base md:text-lg leading-snug transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-gray-800 dark:text-gray-200 group-hover:text-primary"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full ml-4 shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white rotate-180"
                          : "bg-gray-100 dark:bg-slate-900 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {isOpen ? <AiOutlineMinus className="w-4 h-4" /> : <IoMdAdd className="w-4 h-4" />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm md:text-base text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-900 pt-4 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-950 border border-gray-200 dark:border-gray-800 rounded-3xl">
              <HelpCircle className="w-12 h-12 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">No Matching FAQs Found</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto px-4">
                Humne aapke search keyword se match karta koi sawal nahi paya. Kuch aur search karke dekhein ya hume direct contact karein.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar Help Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-heading">
              Kuch Aur Poochna Hai?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
              Agar aapko apna answer nahi mila, toh fikar na karein. Aap direct humse contact kar sakte hain. Hum help ke liye ready hain.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/918171654421"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-emerald-500/10 justify-center cursor-pointer"
              >
                Chat on WhatsApp
              </a>
              
              <Link
                href="/contact"
                className="flex items-center gap-2 p-3.5 rounded-2xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all duration-300 shadow-md justify-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> Contact Form Submit Karein
              </Link>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-slate-950">
            <h4 className="font-bold text-foreground text-lg mb-4">Quick Contacts</h4>
            <div className="space-y-4">
              <a href="tel:+918171654421" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                <div className="p-2 bg-gray-100 dark:bg-slate-900 rounded-lg">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                +91 81716 54421
              </a>
              <a href="mailto:deepsoftskills@gmail.com" className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                <div className="p-2 bg-gray-100 dark:bg-slate-900 rounded-lg">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                deepsoftskills@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
