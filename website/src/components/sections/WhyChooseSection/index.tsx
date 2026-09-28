import SectionHeading from "@/components/ui/SectionHeading";
import Causes from "./Causes";
import Image from "next/image";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Info area */}
          <div className="w-full">
            <SectionHeading
              label="Why Choose Us"
              heading="Your Trusted Partner in Construction"
              align="left"
            />
            <p className="base-para mt-5 mb-7 lg:mb-10">With years of industry expertise and a focus on quality and reliability, we build lasting relationships by delivering projects on time and within budget.</p>

            <Causes/>
          </div>

          {/* Image */}
          <div className="w-full min-h-100 md:min-h-120 lg:min-h-0 relative rounded-2xl overflow-hidden">
            <Image
              src="/homepage/why-choose-section.jpg"
              alt="Contractor discussing"
              fill
              sizes="(max-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
