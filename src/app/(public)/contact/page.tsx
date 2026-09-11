import HeroSection from "@/components/sections/CommonHero";
import ContactMethods from "@/components/sections/ContactMethods";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Conact us",
  openGraph:{
    images:["/contactpage/contact-hero.jpg"]
  }
}

export default function page() {
  return (
    <>
      <HeroSection
        img="/contactpage/contact-hero.jpg"
        badge="Contact Us"
        headline="Let’s Build Something Great Together"
        text="Have a project in mind or need help bringing your ideas to life? Get in touch with us today. We’d love to hear about your project and explore how we can help."
      />
      <ContactMethods/>
    </>
  );
}
