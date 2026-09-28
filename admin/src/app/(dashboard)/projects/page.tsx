import NewBookingButton from "@/components/NewBookingButton";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectFilter from "@/components/ProjectFilter";
import ProjectsList from "@/components/ProjectsList";
import StatCard from "@/components/StatCard";
import { Metadata } from "next";
import { FiCheckCircle, FiFolder, FiPauseCircle } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Projects",
};

export default function page() {
  return (
    <div className="p-6 flex flex-col xl:flex-row gap-5">
      {/* Left */}
      <div className="w-full space-y-4">
        {/* Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8 mt-2">
          <div className="w-full">
            <h3 className="font-semibold text-xl">Projects</h3>
            <p className="text-xs text-gray-500">
              Manage your construction projects. View, edit and track progress.
            </p>
          </div>

          <NewBookingButton />
        </div>

        {/* Short info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={FiFolder}
            label="Total Projects"
            number={28}
            trend="up"
            change={12}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon={FiCheckCircle}
            label="Completed"
            number={8}
            trend="up"
            change={33}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon={LuFileClock}
            label="In Progress"
            number={12}
            trend="up"
            change={20}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon={FiPauseCircle}
            label="Pending"
            number={8}
            trend="up"
            change={60}
            comparisonText="vs. last 30 days"
          />
        </div>

        {/* Projects List */}
        <div className="w-full space-y-4">
          <ProjectFilter />
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}
