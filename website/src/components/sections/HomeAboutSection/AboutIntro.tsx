import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutIntro() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <SectionHeading
        label="About Us"
        heading="Committed to Quality, Safety, and Reliability"
        align="left"
      />

      <p className="base-para">
        We are dedicated to delivering high-quality construction solutions with
        a focus on craftsmanship, safety, and attention to detail. Every project
        is completed with precision to ensure lasting results.
      </p>
    </div>
  );
}
