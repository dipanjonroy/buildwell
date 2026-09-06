import HomeHeroSection from "@/components/sections/HomeHero";
import BrandLogoSection from "@/components/sections/BrandLogoSection";
import AboutSection from "@/components/sections/HomeAboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CtaSection from "@/components/sections/CTASection";
import ArticleSection from "@/components/sections/ArticleSection";

export default function Homepage() {
  return (
    <>
      <HomeHeroSection />
      <BrandLogoSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <WhyChooseSection />
      <TeamSection />
      <TestimonialSection />
      <CtaSection />
      <ArticleSection />
    </>
  );
}
