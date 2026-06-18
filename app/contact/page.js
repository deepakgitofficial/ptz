import React from "react";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import ContactForm3 from "@/components/contact/ContactForm3";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Us | Pure Tech Zone",
  description:
    "Get in touch with Pure Tech Zone for professional web development services in Baghpat. Let's discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-10 bg-gray-50 dark:bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 font-heading">

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Contact Us
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Agar aapko website, mobile app ya kisi digital project par kaam karwana hai, toh humse baat karein. Hum aapke ideas ko reality me badalne ke liye ready hain.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 border p-6  border-gray-200 dark:border-gray-700 rounded-xl glass dark:glass-dark">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">
                        Email Us
                      </h4>
                      <a
                        href="mailto:deepsoftskills@gmail.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        deepsoftskills@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 border p-6 border-gray-200 dark:border-gray-700 rounded-xl glass dark:glass-dark">
                    <div className="bg-purple-500/10 p-4 rounded-xl">
                      <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">
                        Call Us
                      </h4>
                      <a
                        href="tel:+918171654421"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                      >
                        +91 81716 54421
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5 border p-6 border-gray-200 dark:border-gray-700 rounded-xl glass dark:glass-dark">
                    <div className="bg-pink-500/10 p-4 rounded-xl">
                      <MapPin className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">
                        Visit Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Baghpat, Uttar Pradesh, India 250609
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm3 />
            </div>
          </div>

          {/* <div className="mt-10 mb-10 max-w-5xl mx-auto">
           
          </div> */}
        </div>
      </section>

      {/* <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.4884302733872!2d77.22756101634697!3d28.94266040630585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c53001974f7e5%3A0xba962bee9de802b9!2sBaghpat%2C%20uttar%20pradesh!5e0!3m2!1sen!2sin!4v1776518773278!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
      </section> */}
      {/* <CTASection /> */}
    </>
  );
}
