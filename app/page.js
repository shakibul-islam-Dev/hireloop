import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import JobsSection from "./components/JobsSection";
import FeaturesSection from "./components/FeaturesSection";

import { PricingSection } from "./components/PricingSection";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <JobsSection></JobsSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <FooterSection></FooterSection>
    </div>
  );
}
