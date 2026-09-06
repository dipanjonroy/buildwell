import SectionHeading from "@/components/ui/SectionHeading";
import { GoCheckCircle } from "react-icons/go";
import ServicesTab from "./ServicesTab";

type ServiceDetailsProps = {
  overview: string[];
  quote: string;
  points: string[];
};

export default function index({
  overview,
  quote,
  points,
}: ServiceDetailsProps) {
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex gap-22">

          {/* Sidebar */}
          <div className="text-white w-100">
            <div className="sticky top-20">
              <ServicesTab/>
            </div>
          </div>

          {/* Details area */}
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <SectionHeading heading="Overview" align="left" />
              {overview.map((text, idx) => (
                <p className="base-para tracking-tight" key={idx}>
                  {text}
                </p>
              ))}
            </div>

            <div className="p-8 helper-bg border-l-4 black-border">
              <p className="text-lg tracking-tight italic font-semibold">{`"${quote}"`}</p>
            </div>

            <div className="space-y-6">
              <SectionHeading heading="Scope of Work" align="left" />
              <div className="flex gap-30">
                <div className="space-y-2">
                  {points.slice(0, 3).map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <GoCheckCircle className="black-text" size={18} />
                      <span className="base-para">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {points.slice(3).map((point, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <GoCheckCircle className="black-text" size={18} />
                      <span className="base-para">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
