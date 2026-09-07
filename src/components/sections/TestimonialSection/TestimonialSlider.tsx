import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    name: "Daniel Brooks",
    location: "Austin, Texas",
    review:
      "HomeBuild Construction transformed our outdated kitchen into a beautiful, functional space. Their team was professional, transparent, and respectful throughout the project. We couldn't be happier with the results.",
    img: "/reviews/daniel-brooks.png",
  },
  {
    name: "Christopher Hayes",
    location: "Denver, Colorado",
    review:
      "From the initial consultation to the final walkthrough, HomeBuild Construction delivered excellent workmanship. They stayed organized, communicated clearly, and completed our home renovation exactly as promised.",
    img: "/reviews/christopher-hayes.png",
  },
  {
    name: "Matthew Reynolds",
    location: "Charlotte, North Carolina",
    review:
      "We hired HomeBuild Construction for a major home renovation, and they exceeded our expectations. The craftsmanship was impressive, timelines were well managed, and everyone was friendly and professional.",
    img: "/reviews/matthew-reynolds.png",
  },
  {
    name: "Jessica Morgan",
    location: "Portland, Oregon",
    review:
      "HomeBuild Construction made our remodeling experience incredibly smooth. They listened carefully to our ideas, offered thoughtful suggestions, and delivered beautiful results that completely changed the feel of our home.",
    img: "/reviews/jessica-morgan.png",
  },
  {
    name: "Lauren Bennett",
    location: "Tampa, Florida",
    review:
      "We are thrilled with our new living space from HomeBuild Construction. The attention to detail was outstanding, and the team kept everything clean, organized, and stress-free throughout the entire project.",
    img: "/reviews/lauren-bennett.png",
  },
];

export default function TestimonialSlider() {
  const testimonials = [...testimonialsData,...testimonialsData];
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-max animate-marquee">
        <div className="flex">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="mx-4">
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
