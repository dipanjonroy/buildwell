import Mainbutton from "@/components/ui/buttons/Mainbutton";
import SectionHeading from "@/components/ui/SectionHeading";
import FeaturedArticles from "./FeaturedArticles";

export default function index() {
  return (
    <section className="section-padding helper-bg">
      <div className="site-container">
        {/* Section intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-10">
          <SectionHeading
            label="Articles"
            heading="Building Knowledge, One Article at a Time"
            className="w-full max-w-120"
            align="left"
          />

          <Mainbutton btnName="View All" variant="black" url="/" />
        </div>

        {/* Articles area */}
        <FeaturedArticles/>
      </div>
    </section>
  );
}
