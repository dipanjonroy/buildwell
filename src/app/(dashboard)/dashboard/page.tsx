import DashboardCalender from "@/components/dashboard/DashboardCalender";
import StatCard from "@/components/dashboard/StatCard";
import UpcomingBookingsCard from "@/components/dashboard/UpcomingBookingsCard";
import {
  FiCalendar,
  FiFolder,
  FiUser,
  FiMessageSquare,
  FiUsers,
} from "react-icons/fi";

export default function page() {
  const now = new Date();

  const hour = now.getHours();

  let greeting = "Good morning";

  if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else if (hour >= 18) {
    greeting = "Good evening";
  }

  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="p-6 flex gap-8">
      {/* Left */}
      <div className="flex-3 min-w-0">
        {/* Greetings */}
        <div className="flex justify-between mb-8 mt-2">
          <div>
            <h3 className="font-semibold tracking-tight text-xl">
              {greeting}, Dipanjon!
            </h3>
            <p className="text-xs tracking-tight text-gray-500">
              Here&apos;s what&apos;s happening with your business today.
            </p>
          </div>

          <div className="text-gray-500 font-semibold flex items-center gap-3">
            <FiCalendar size={18} />
            <span className="text-xs">{formattedDate}</span>
          </div>
        </div>

        {/* Short info */}
        <div className="grid grid-cols-5 gap-4">
          <StatCard
            icon= {FiCalendar}
            label= "Total Bookings"
            number={28}
            trend="up"
            change={12}
            comparisonText="vs. last 7 days"
          />

          <StatCard
            icon= {FiUser}
            label= "New Quote Requests"
            number={14}
            trend="up"
            change={27}
            comparisonText="vs. last 7 days"
          />

          <StatCard
            icon= {FiFolder}
            label= "Projects"
            number={6}
            trend="up"
            change={20}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon= {FiMessageSquare}
            label= "Testimonials"
            number={8}
            trend="up"
            change={33}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon= {FiUsers}
            label= "Team Members"
            number={4}
            trend="equal"
            change={0}
            comparisonText="vs. last 30 days"
          />
        </div>

        <div className="flex gap-4 mt-4">
          {/* Upcoming Bookings */}
          <div className="min-w-0 flex-4">
            <UpcomingBookingsCard/>
          </div>
          <div className="min-w-0 flex-3">
            <DashboardCalender/>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="min-w-0 flex-1">Right</div>
    </div>
  );
}
