import { ProjectType } from "@/libs/projectData";
import ProjectInfo from "./ProjectInfo";

export default function index({ project }: { project: ProjectType }) {
  const { clientName, location, size, year, status } = project;
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex gap-10">
          <div className="w-100 sticky top-20">
            <ProjectInfo
              clientName={clientName}
              location={location}
              size={size}
              year={year}
              status={status}
            />
          </div>
          <div className="flex-1">Content Area</div>
        </div>
      </div>
    </section>
  );
}
