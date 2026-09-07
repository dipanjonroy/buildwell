import Mainbutton from "@/components/ui/buttons/Mainbutton";
import SectionHeading from "@/components/ui/SectionHeading";
import Projects from "./Projects";


export default function index() {
  return (
    <section className="pb-[clamp(3.75rem,9vw,7.5rem)]">
      <div className="site-container">
        <div className="space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="w-full max-w-150">
              <SectionHeading
                label="Portfolio"
                heading="Explore Our Latest Construction Projects"
                align="left"
              />
            </div>

            <Mainbutton btnName="View Portfolio" variant="black" url="/" />
          </div>

          <Projects/>
        </div>
      </div>
    </section>
  );
}
