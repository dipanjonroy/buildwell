import { ProjectType } from "@/libs/projectData";
import ProjectCard from "../PortfolioSection/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects({
  projects,
}: {
  projects: ProjectType[];
}) {
  return (
    <section className="helper-bg section-padding">
      <div className="site-container">
        <div className="w-full space-y-8">
          <SectionHeading heading="Feature Projects" align="left"/>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                details={project}
                featured={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
