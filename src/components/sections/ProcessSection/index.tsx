import SectionHeading from "@/components/ui/SectionHeading";
import Processes from "./Processes";
import HorizontalScrollAnimation from "@/components/animations/HorizontalScrollAnimation";

export default function index() {
  return (
    <section className="section-padding black-bg overflow-hidden">
      <div className="site-container">
        <HorizontalScrollAnimation>
          <div className="space-y-20">
            <SectionHeading
              label="How We Work"
              heading="From Vision to Completion"
              align="center"
              variant="white"
            />

            {/* Processes */}
            <Processes />
          </div>
        </HorizontalScrollAnimation>
      </div>
    </section>
  );
}
