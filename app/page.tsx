
import HeroSection from "@/components/home/HeroSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ProcessSection from "@/components/home/ProcessSection";
import PricingSection from "@/components/home/PricingSection";
import ServicesSection from "@/components/home/ServicesSection";
import FaqSection from "@/components/home/FaqSection";
import BusinessDomains from "@/components/home/BusinessDomains";

import { client } from "@/lib/sanity";

export default   async function  Home() {
const projectData = await client.fetch(`*[_type == "ProjectsSchema"]`);


  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection  data={projectData} />
      <ProcessSection />
      <BusinessDomains />
      <FaqSection/>
      <PricingSection />
    </>
  );
}

// const fecthProjectFun = async ()=>{
// const projectData = await client.fetch(`*[_type == "ProjectsSchema"]`);
//   console.log(projectData, "projectData")
// }