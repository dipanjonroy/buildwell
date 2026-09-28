"use client";

import { projectsData } from "@/libs/projectData";
import { useProjectStore } from "@/store/ProjectStore";
import Link from "next/link";
import { FiCalendar, FiClock, FiEdit, FiMapPin, FiUser } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import ItemNotFound from "./ItemNotFound";

export default function ProjectDetails() {
  const { selectedProjectId } = useProjectStore();

  const project = projectsData.find((item) => item.id === selectedProjectId);

  if (!project) return <ItemNotFound text="No project found" />;

  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      {/* Header*/}
      <div className="flex items-center justify-between border-b border-gray-300 pb-3">
        <h4 className="font-bold text-lg">Project Details</h4>

        {/* Action button */}
        <div className="flex items-center gap-3">
          <Link
            aria-label="Update project button"
            href={`/projects/${project?.id}`}
          >
            <FiEdit aria-hidden size="20" />
          </Link>
          <button
            aria-label="Delete project button"
            className="text-red-500 cursor-pointer"
          >
            <AiFillDelete aria-hidden size="22" />
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="w-full mt-6">
        <div className="relative w-full h-50 overflow-hidden rounded-xl">
          <Image
            src={project?.img}
            alt={project?.title}
            fill
            sizes="(max-width:768px) 33vw, 100vw"
            className="object-cover"
            loading="eager"
          />
        </div>

        <div className="mt-3">
          <h3 className="font-semibold text-xl">{project.title}</h3>

          <p className="text-sm text-slate-500 py-2">{project.shortDesc}</p>

          <div className={`mt-1 flex flex-col gap-1 text-slate-500`}>
            <span className="text-sm font-medium flex items-center gap-2">
              <FiMapPin />
              <span>{project.location}</span>
            </span>

            <span className="text-sm font-medium flex items-center gap-2">
              <FiUser />
              <span>{project.clientName}</span>
            </span>

            <span className="text-sm font-medium flex items-center gap-2">
              <FiCalendar />
              <span>{project.size} sq ft</span>
            </span>

            <span className="text-sm font-medium flex items-center gap-2">
              <FiClock />
              <span>{project.year}</span>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Overview</h3>

          <p className="text-sm text-slate-500 mt-2">{project.overview}</p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Design & Planning</h3>
          <div className="relative w-full h-50 overflow-hidden rounded-xl">
            <Image
              src={project.designPlanning.image}
              alt={project?.title}
              fill
              sizes="(max-width:768px) 33vw, 100vw"
              className="object-cover"
              loading="eager"
            />
          </div>

          <p className="text-sm text-slate-500 mt-2">{project.overview}</p>
        </div>
      </div>
    </div>
  );
}
