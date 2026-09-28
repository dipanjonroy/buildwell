"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiMoreVertical,
  FiUser,
} from "react-icons/fi";
import { ProjectCardProp } from "./ProjectGridCard";

export default function ProjectListCard({ project }: ProjectCardProp) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const actionRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (actionRef.current && !actionRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full white-bg border border-gray-200 p-3 rounded-lg">
      {/* Click overlay */}
      <button
        type="button"
        aria-label={`View project: ${project.title}`}
        className="absolute inset-0 w-full h-full cursor-pointer rounded-lg"
      />

      {/* Content: pass clicks through to the overlay, except the action menu */}
      <div className="relative pointer-events-none flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
        {/* Image + title/location */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 pr-10 lg:pr-0">
          <div className="relative w-20 h-14 shrink-0 rounded-md overflow-hidden">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h5 className="leading-tight text-sm font-bold line-clamp-2 lg:truncate">
              {project.title}
            </h5>
            <span className="mt-0.5 text-xs font-medium text-slate-500 flex items-center gap-2 min-w-0">
              <FiMapPin className="shrink-0" aria-hidden />
              <span className="truncate">{project.location}</span>
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-gray-100 pt-2 lg:flex-nowrap lg:gap-4 lg:border-0 lg:pt-0">
          <span className="text-xs font-medium text-slate-500 flex items-center gap-2 min-w-0 lg:w-40">
            <FiUser className="shrink-0" aria-hidden />
            <span className="truncate">{project.clientName}</span>
          </span>

          <span className="text-xs font-medium text-slate-500 flex items-center gap-2 whitespace-nowrap lg:w-32">
            <FiCalendar className="shrink-0" aria-hidden />
            <span>{project.size} sq ft</span>
          </span>

          <span className="text-xs font-medium text-slate-500 flex items-center gap-2 whitespace-nowrap lg:w-20">
            <FiClock className="shrink-0" aria-hidden />
            <span>{project.year}</span>
          </span>
        </div>

        {/* Action menu: top right below lg, end of the row at lg+ */}
        <div
          ref={actionRef}
          className="absolute top-0 right-0 lg:static shrink-0 pointer-events-auto"
        >
          <button
            aria-label={`Open actions for ${project.title}`}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            type="button"
            className="size-8 rounded-full flex-center cursor-pointer border border-gray-200 white-bg"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FiMoreVertical aria-hidden />
          </button>

          {isOpen && (
            <div role="menu" className="absolute right-0 top-full mt-1 z-20">
              <div className="w-32 white-bg rounded-lg border border-gray-200 overflow-hidden shadow-md">
                <button
                  type="button"
                  role="menuitem"
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
                  role="menuitem"
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
  );
}
