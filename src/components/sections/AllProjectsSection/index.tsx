"use client";

import { projectsData } from "@/libs/projectData";
import { useState } from "react";
import ProjectCard from "../PortfolioSection/ProjectCard";

export default function AllProjects() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categories = [...new Set(projectsData.map((project)=>project.category))];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => activeTab === project.category);

  console.log(activeTab);

  return (
    <section className="section-padding">
      <div className="site-container">
        <div className="w-full space-y-10">
          {/* Buttons */}
          <div className="flex-center">
            <div className="helper-bg border black-border rounded-4xl px-8 py-4 black-text space-x-6">
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

          {/* Projects */}
          <div className="grid grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} details={project} featured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
