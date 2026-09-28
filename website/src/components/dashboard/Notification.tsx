"use client";

import useClickOutsideClose from "@/hooks/useClickOutsideClose";
import { useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa6";

export default function Notification() {
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false);

  const notificationRef = useRef<HTMLDivElement>(null);

  useClickOutsideClose(notificationRef, () => setNotificationOpen(false));

  return (
    <div ref={notificationRef} className="relative">
      {/* Notification Button */}
      <button
        className={`w-10 h-10 rounded-full flex-center cursor-pointer ${notificationOpen ? "bg-gray-100" : "hover:bg-gray-100"}`}
        onClick={() => setNotificationOpen(!notificationOpen)}
      >
        <span className="relative">
          <FaRegBell size={20} />

          {/* Unread indicator */}
          <span className="absolute -top-0.75 -right-0.75 w-1.75 h-1.75 rounded-full bg-red-600" />
        </span>
      </button>

      {/* Notification Dropdown */}
      {notificationOpen && (
        <div className="absolute top-full -right-30 lg:right-0 w-80 mt-3 white-bg border border-gray-200 rounded-xl overflow-hidden pb-4 shadow-xl">
          {/* Headline */}
          <div className="px-6 py-3 border-b border-gray-100">
            <h4 className="font-semibold tracking-tight">Notifications</h4>
          </div>

          {/* Notification */}
          <div className="max-h-70 overflow-y-auto" data-lenis-prevent>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 hover:bg-gray-100 border-b border-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Rajon king</span> booked a
                    schedule.
                  </p>

                  <p className="text-xs text-gray-500">
                    October 9, 2026 · 10:30 PM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
