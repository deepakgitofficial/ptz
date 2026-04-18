import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import FloatingElements from "@/components/ui/FloatingElements";

// Primary font (headings)
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Secondary font (body text)
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Pure Tech Zone | Web Development Services in Baghpat",
  description: "We build fast, SEO-optimized websites that grow your business. Top web development agency in Baghpat.",
  keywords: "Web Development Services in Baghpat, Software Development Company in Baghpat, Website Design Company in Baghpat, Ecommerce Website Developer in Baghpat",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans antialiased">
        
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
          <FloatingElements />
        </ThemeProvider>
      </body>
    </html>
  );
}