import StatisticsSection from "../components/StatisticsSection";
import JobsSection from "../components/JobsSection";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import HeroSearchSection from "@/components/HeroSearchSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSearchSection></HeroSearchSection>
      <StatisticsSection></StatisticsSection>
      <JobsSection></JobsSection>
      <FeaturesSection></FeaturesSection>
      <PricingSection></PricingSection>
      <CTASection></CTASection>
    </div>
  );
}
