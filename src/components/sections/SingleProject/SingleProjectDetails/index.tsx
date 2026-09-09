import { ProjectType } from "@/libs/projectData";
import ProjectInfo from "./ProjectInfo";
import TestimonialCard from "../../TestimonialSection/TestimonialCard";
import { testimonialsData } from "@/libs/testimonialData";

export default function index({ project }: { project: ProjectType }) {
  const { id, clientName, location, size, year, status } = project;

  // Get the review
  const review = testimonialsData.find(
    (testimonial) => testimonial.projectId === id,
  );
  if (!review) return null;
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex gap-10">
          <div className="w-100 sticky top-20 space-y-6">
            <ProjectInfo
              clientName={clientName}
              location={location}
              size={size}
              year={year}
              status={status}
            />

            <TestimonialCard details={review} />
          </div>
          <div className="flex-1">Content Area</div>
        </div>
      </div>
    </section>
  );
}
