import { projectsData } from "@/libs/projectData";
import ViewAllBtn from "./ViewAllBtn";
import Image from "next/image";

export default function RecentProjectsCard() {
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <h4 className="font-bold text-lg">Recent Projects</h4>
        <ViewAllBtn btnName="View all" url="/dashboard/projects" />
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          projectsData.slice(0,4).map((project)=>(
            <div key={project.id} className="w-full rounded-xl overflow-hidden border border-gray-300">
              <div className="w-full h-40 relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:425px) 100vw,13vw"
                />
              </div>

              <div className="white-bg p-4">
                <h4 className="font-bold text-sm leading-none mb-1">{project.title}</h4>
                <p className="text-xs capitalize text-gray-500">{project.category}</p>
                <p className="text-xs capitalize text-gray-500 mb-4">{project.location}</p>
                <ViewAllBtn btnName="View Project" url={`/projects/${project.slug}`} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
