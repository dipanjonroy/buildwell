import BookingDetails from "@/components/BookingDetails";
import BookingFilter from "@/components/BookingFilter";
import BookingsList from "@/components/BookingsList";
import DashboardCalender from "@/components/DashboardCalender";
import NewBookingButton from "@/components/NewBookingButton";
import StatCard from "@/components/StatCard";
import { Metadata } from "next";
import { FiCalendar, FiClock, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";

export const metadata: Metadata = {
  title: "Bookings",
};

export default function Page() {
  return (
    <div className="p-6 flex flex-col xl:flex-row gap-5">
      {/* Left */}

      <div className="flex-3 min-w-0 space-y-4">
        {/* Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-8 mt-2">
          <div className="w-full">
            <h3 className="font-semibold text-xl">Bookings</h3>
            <p className="text-xs text-gray-500">
              Manage your client bookings and appoinments
            </p>
          </div>

          <NewBookingButton />
        </div>

        {/* Short info */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={FiCalendar}
            label="Total Bookings"
            number={28}
            trend="up"
            change={12}
            comparisonText="vs. last 6 months"
          />

          <StatCard
            icon={FiClock}
            label="This Week"
            number={8}
            trend="up"
            change={33}
            comparisonText="vs. last 7 days"
          />

          <StatCard
            icon={LuFileClock}
            label="This Conths"
            number={12}
            trend="up"
            change={20}
            comparisonText="vs. last 30 days"
          />

          <StatCard
            icon={FiUsers}
            label="New Clients"
            number={8}
            trend="up"
            change={60}
            comparisonText="vs. last 30 days"
          />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="min-w-0 flex-3">
            <div className="flex flex-col md:flex-row lg:flex-col gap-4">
              <DashboardCalender />
              <BookingFilter />
            </div>
          </div>
          <div className="min-w-0 flex-5">
            <BookingsList />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="min-w-0 flex-1 space-y-5">
        <div className="sticky top-6">
          <BookingDetails />
        </div>
      </div>
    </div>
  );
}
