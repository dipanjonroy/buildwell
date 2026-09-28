import { bookings } from "@/libs/booking";
import Calender from "../ui/Calender";

export default function DashboardCalender() {
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <h4 className="font-bold text-lg">This Month</h4>

      <div className="w-full mt-8">
        <Calender bookings={bookings} weekClass="text-gray-400 font-semibold text-sm gap-5 mt-8" dayClass="gap-2.5 mt-5 text-xs"/>

        <div className="w-full flex flex-wrap items-center justify-between sm:justify-start sm:gap-6 md:gap-y-2 mt-6">
          <span className="flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-400 font-semibold">
              Confirmed
            </span>
          </span>

          <span className="flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-400 font-semibold">Pending</span>
          </span>

          <span className="flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span className="text-xs text-gray-400 font-semibold">
              Rescheduled
            </span>
          </span>

          <span className="flex items-center gap-1">
            <span className="block w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-xs text-gray-400 font-semibold">
              Rejected
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
