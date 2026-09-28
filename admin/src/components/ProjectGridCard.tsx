"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { ProjectStatus, ProjectType } from "@/libs/projectData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiMoreVertical,
  FiUser,
} from "react-icons/fi";

export type ProjectCardProp = {
  project: ProjectType;
};

export const statusStyle: Record<ProjectStatus, string> = {
  completed: "bg-emerald-50 text-emerald-500",
  progress: "bg-blue-50 text-blue-500",
  pending: "bg-orange-50 text-orange-500",
};

export default function ProjectGridCard({ project }: ProjectCardProp) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const actionRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useClickOutsideClose(actionRef, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`relative w-full rounded-xl overflow-hidden white-bg border border-gray-300`}
    >
      <Link href={`/projects/${project.id}`}>
        <div className="w-full">
          <div className="w-full h-40 overflow-hidden relative">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              loading="eager"
            />
          </div>

          <div className="p-6">
            <span
              className={`px-4 py-1 text-xs font-medium capitalize ${statusStyle[project.status]} rounded-full`}
            >
              {project.status}
            </span>
            <h4
              className={`font-bold text-base tracking-tight capitalize line-clamp-1 mt-3`}
            >
              {project.title}
            </h4>

            <div className={`mt-1 flex flex-col gap-1 text-slate-500`}>
              <span className="text-xs font-medium flex items-center gap-2">
                <FiMapPin />
                <span>{project.location}</span>
              </span>

              <span className="text-xs font-medium flex items-center gap-2">
                <FiUser />
                <span>{project.clientName}</span>
              </span>

              <div className="flex items-center gap-6">
                <span className="text-xs font-medium flex items-center gap-2">
                  <FiCalendar />
                  <span>{project.size} sq ft</span>
                </span>

                <span className="w-px h-4 bg-slate-500" />

                <span className="text-xs font-medium flex items-center gap-2">
                  <FiClock />
                  <span>{project.year}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full flex items-center justify-between p-6">
          <span className="px-4 py-1 text-xs font-medium capitalize white-bg rounded-full">
            {project.category}
          </span>

          <div ref={actionRef} className="relative pointer-events-auto">
            <button
              aria-label="card action menu open button"
              type="button"
              className="size-8 white-bg rounded-full flex-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiMoreVertical aria-hidden />
            </button>

            {isOpen && (
              <div className="absolute right-0">
                <div className="w-30 white-bg rounded-lg border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => {
                      router.push(`/projects/${project.id}/edit`);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium hover:helper-bg transition-colors duration-300 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm font-medium hover:helper-bg transition-colors duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
