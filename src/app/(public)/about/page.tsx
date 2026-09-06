import { Metadata } from "next";

import HeroSection from "@/components/sections/HeroSection/CommonHero";
import AboutSection from "@/components/sections/AboutSection";
import MissionVisionSection from "@/components/sections/MissionVisionSection";

import ProcessSection from "@/components/sections/ProcessSection";
import TeamSection from "@/components/sections/TeamSection";
import CtaSection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About",
};

const headline = "Building With Purpose, Crafting With Pride";
const text =
  "We believe great construction is more than putting materials together—it’s about creating spaces that last, inspire, and make a difference. With skilled craftsmanship, honest communication, and attention to every detail, we bring each client’s vision to life.";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        img="/aboutpage/about-us-hero-image.jpg"
        badge="About Us"
        headline={headline}
        text={text}
      />
      <AboutSection />
      <MissionVisionSection />
      <ProcessSection />
      <TeamSection />
      <CtaSection className="section-padding" />
    </>
  );
}
