import ProjectCard from "./ProjectCard";

import { projectsData } from "@/libs/projectData";

export default function Projects() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6">
        {
          projectsData.map((project,idx)=>(
            <div key={idx} className={idx < 2 ? "xl:col-span-3" : "xl:col-span-2"}>
              <ProjectCard details={project} featured={idx < 2}/>
            </div>
          ))
        }
      </div>
    </div>
  );
}
