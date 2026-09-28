"use client";

import BookingFilter from "@/components/dashboard/BookingFilter";
import Button from "@/components/dashboard/Button";
import DashboardCalender from "@/components/dashboard/DashboardCalender";
import StatCard from "@/components/dashboard/StatCard";
import BookingModal from "@/components/modals/BookingModal";
import { useModalStore } from "@/store/ModalStore";
import { FiCalendar, FiClock, FiPlus, FiUsers } from "react-icons/fi";
import { LuFileClock } from "react-icons/lu";

export default function Page() {
  const { openModal } = useModalStore();
  return (
    <div className="p-6 flex flex-col 2xl:flex-row gap-5">
      {/* Left */}

      <div className="flex-3 min-w-0 space-y-4">
        {/* Info */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-8 mt-2">
          <div className="w-full">
            <h3 className="font-semibold text-xl">Bookings</h3>
            <p className="text-xs text-gray-500">
              Manage your client bookings and appoinments
            </p>
          </div>

          <Button
            name="New Booking"
            icon={FiPlus}
            onClick={() => openModal("booking-modal", <BookingModal />)}
          />
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

        <div className="w-full flex gap-4">
          <div className="min-w-0 flex-3 space-y-4">
            <DashboardCalender/>
            <BookingFilter/>
          </div>
          <div className="min-w-0 flex-5">right</div>
        </div>
      </div>

      {/* Right */}
      <div className="min-w-0 flex-1 space-y-5">Right</div>
    </div>
  );
}
