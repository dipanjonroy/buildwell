import Mainbutton from "@/components/ui/buttons/Mainbutton";
import { projectsData } from "@/libs/projectData";
import Image from "next/image";

export default function RelatedProject({ category }: { category: string }) {
  const project = projectsData.find(
    (item) => item.category.toString() === category.toString(),
  );

  if (!project) {
    return (
      <div className="w-full h-100 rounded-xl flex-center text-center bg-gray-200">
        No project Found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="heading font-bold text-2xl black-text">Related Project</h3>
      <div className="relative w-full h-100 rounded-xl overflow-hidden">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={project?.img}
            alt={project?.title}
            fill
            sizes="(max-width:768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* Black overlay */}
        <span className="absolute inset-x-0 bottom-0 h-70 bg-linear-to-t from-black/60 to-transparent pointer-events-none"/>

        {/* Text content */}
        <div className="absolute inset-0">
          <div className="w-full h-full flex flex-col justify-end p-6 white-text space-y-4">
            <h4 className="heading font-bold tracking-tight text-3xl leading-tight">{project.title}</h4>
            <span className="base-para">{project.location}</span>
            <Mainbutton url={`/projects/${project.slug}`} variant="white" btnName="View Details"/>
          </div>
        </div>
      </div>
    </div>
  );
}
