import { HeroSection } from "@/components/home/HeroSection";
import { IntroServices } from "@/components/home/IntroServices";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return <><HeroSection/><IntroServices/><FeaturedProject/><StatsSection/><ServicesOverview/><PartnersMarquee/><CTASection/></>;
}
