
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingSection from "@/components/home/PricingSection";
import ServicesSection from "@/components/home/ServicesSection";
import FaqSection from "@/components/home/FaqSection";
export default function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
       <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <FaqSection/>
    </>
  );
}
