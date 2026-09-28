import SectionHeading from "@/components/ui/SectionHeading";
import Services from "./Services";

export default function index() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="w-full space-y-16">
          {/* Heading text */}
          <div className="w-full max-w-180 mx-auto">
            <SectionHeading
              label="What We Do"
              heading="Complete Construction Solutions Under One Roof"
              align="center"
            />
          </div>

          {/* Services */}
          <Services />
        </div>
      </div>

      <div className="h-dvh"></div>
    </section>
  );
}
