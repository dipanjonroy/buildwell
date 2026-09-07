import Mainbutton from "@/components/ui/buttons/Mainbutton";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMembers from "./TeamMembers";

export default function index() {
  return (
    <section className="section-padding helper-bg">
      <div className="site-container">
        {/* Intro area */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-12">
          <div className="w-full max-w-120">
            <SectionHeading
              label="Our Team"
              heading="Dedicated Professionals Behind Homebuild"
              align="left"
            />
            <p className="base-para mt-5">Meet our skilled professionals dedicated to delivering quality craftsmanship, reliable service, and exceptional results on every project.</p>
          </div>
          <Mainbutton url="/" btnName="Meet Our Team" variant="black" />
        </div>

        {/* Teams */}
        <TeamMembers/>
      </div>
    </section>
  );
}
