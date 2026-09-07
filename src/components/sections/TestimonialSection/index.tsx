import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialSlider from "./TestimonialSlider";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container space-y-14">
        {/* Section Intro */}
        <SectionHeading
          label="Testimonials"
          heading="What They say About BuildWell"
          align="center"
        />

        {/* Testimonials */}
        <TestimonialSlider/>
      </div>
    </section>
  );
}