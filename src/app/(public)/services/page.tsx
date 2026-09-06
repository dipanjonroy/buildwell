import HeroSection from "@/components/sections/HeroSection/CommonHero";
import ServiceSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestiomonialSection from "@/components/sections/TestimonialSection";
import CtaSection from "@/components/sections/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const heading = "Construction Services Designed Around Your Vision";
const text =
  "From new construction and renovations to complete remodeling, we provide dependable construction services tailored to your needs. Our team combines quality craftsmanship, thoughtful planning, and attention to detail to deliver spaces built for lasting value and everyday living.";

export default function page() {
  return (
    <>
      <HeroSection
        img="/Service-page-hero-image.jpg"
        badge="Our Services"
        headline={heading}
        text={text}
      />
      <ServiceSection />
      <PortfolioSection />
      <TestiomonialSection />
      <CtaSection />
    </>
  );
}
