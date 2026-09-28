"use client";

import { projectsData } from "@/libs/projectData";
import { useState } from "react";
import ProjectCard from "../PortfolioSection/ProjectCard";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

const PROJECTS_PER_LOAD = 6;

export default function AllProjects() {
  const [visibleCount, setVisibleCount] = useState<number>(PROJECTS_PER_LOAD);

  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => activeTab === project.category);

 const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_LOAD);
  };

  const isMoreProjects = visibleCount < filteredProjects.length;

  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="w-full space-y-10">
          {/* Buttons */}
          <div className="flex-center">
            <div className="flex-center flex-wrap helper-bg border black-border rounded-full px-8 py-4 black-text gap-x-6 gap-y-2">
              <button
                className={`cursor-pointer font-bold ${activeTab === "all" ? "opacity-100" : "opacity-60"}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`capitalize cursor-pointer font-bold ${activeTab === category ? "opacity-100" : "opacity-60"}`}
                  onClick={() => setActiveTab(category)}
                >
                  {category.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full flex-col-center gap-20">
            {/* Projects */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {visibleProjects.map((project, idx) => (
                <ProjectCard key={idx} details={project} featured={false} />
              ))}
            </div>

            {/* Load more button */}
            {isMoreProjects && (
              <PrimaryButton
                btnName="Load More"
                variant="black"
                onClick={handleLoadMore}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
