import { ProjectType } from "@/libs/projectData";
import ProjectInfo from "./ProjectInfo";
import TestimonialCard from "../../TestimonialSection/TestimonialCard";
import { testimonialsData } from "@/libs/testimonialData";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { GoCheckCircle } from "react-icons/go";

export default function index({ project }: { project: ProjectType }) {
  // Get the review
  const review = testimonialsData.find(
    (testimonial) => testimonial.projectId === project.id,
  );

  if (!review) return null;
  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="flex flex-col-reverse xl:flex-row gap-20">
          {/* Side bar */}
          <div className="w-full xl:w-100">
            <div className="xl:sticky xl:top-20">
              <div className="flex flex-col md:flex-row xl:flex-col gap-6">
                <ProjectInfo
                  clientName={project.clientName}
                  location={project.location}
                  size={project.size}
                  year={project.year}
                  status={project.status}
                />

                <TestimonialCard details={review} />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex-1">
            <div className="space-y-10 lg:space-y-12 xl:space-y-14">
              {/* Overview */}
              <p className="text-xl xl:text-2xl font-semibold tracking-tight">
                {project.overview}
              </p>

              {/* Design Planning */}
              <div className="w-full space-y-4 lg:space-y-6">
                <SectionHeading heading="Design & Planning" align="left" />
                <p className="base-para tracking-tight">
                  {project.designPlanning.text}
                </p>
                <div>
                  <div className="w-full h-120 relative rounded-2xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>

              {/* Features & functions */}
              <div className="w-full space-y-4 lg:space-y-6">
                <SectionHeading heading="Features & functions" align="left" />
                <p className="base-para tracking-tight">
                  {project.featuresFunctions.text}
                </p>

                <div className="w-full space-y-2">
                  <span className="text-2xl font-semibold tracking-tight block">
                    Key highlights include:
                  </span>
                  <div>
                    {project.featuresFunctions.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <GoCheckCircle className="black-text" size={18} />
                        <span className="base-para">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="w-full h-120 relative rounded-2xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>

              {/* Build process */}
              <div className="w-full space-y-4 lg:space-y-6">
                <SectionHeading heading="Build & process" align="left" />
                <p className="base-para tracking-tight">
                  {project.buildProcess.text}
                </p>
                <div>
                  <div className="w-full h-120 relative rounded-2xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>

              {/* Final OutCome */}
              <div className="w-full space-y-4 lg:space-y-6">
                <SectionHeading heading="Final Outcome" align="left" />
                <p className="base-para tracking-tight">
                  {project.outcomeImpact.text}
                </p>
                <div>
                  <div className="w-full h-120 relative rounded-2xl overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
