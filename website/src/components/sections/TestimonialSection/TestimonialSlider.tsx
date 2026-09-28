import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "@/libs/testimonialData";


export default function TestimonialSlider() {
  const testimonials = [...testimonialsData,...testimonialsData];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-max animate-marquee">
        <div className="flex">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="w-80 lg:w-110 mx-4">
              <TestimonialCard details={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Shadow */}
      <span className="absolute inset-y-0 left-0 w-[clamp(5rem,5vw,25rem)] bg-linear-to-r from-(--color-background) to-transparent pointer-events-none" />
      <span className="absolute inset-y-0 right-0 w-[clamp(5rem,5vw,25rem)] bg-linear-to-l from-(--color-background) to-transparent pointer-events-none" />
    </div>
  );
}
