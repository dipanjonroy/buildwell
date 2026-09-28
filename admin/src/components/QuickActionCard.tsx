"use client";

import {
  FiCalendar,
  FiFolder,
  FiUser,
  FiMessageSquare,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import NewBookingModal from "./modals/NewBookingModal";
import { useModalStore } from "@/store/ModalStore";

const ACTIONS = [
  {
    id: "new-booking",
    icon: FiCalendar,
    name: "Add New Booking",
    action:<NewBookingModal/>,
  },
  {
    id: "create-project",
    icon: FiFolder,
    name: "Create Project",
    action:<NewBookingModal/>,
  },
  {
    id: "send-quote",
    icon: FiUser,
    name: "Send Quote",
    action:<NewBookingModal/>,
  },
  {
    id: "add-testimonial",
    icon: FiMessageSquare,
    name: "Add Testimonial",
    action:<NewBookingModal/>,
  },
  {
    id: "add-member",
    icon: FiUsers,
    name: "Add Member",
    action:<NewBookingModal/>,
  },
];

export default function QuickActionCard() {
  const {openModal} = useModalStore();
  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <h4 className="font-bold text-lg">Quick Actions</h4>

      <div className="flex flex-col mt-4">
        {ACTIONS.map((item, idx) => {
          const Icon = item.icon;
          const lastAction = idx === ACTIONS.length - 1;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center justify-between cursor-pointer ${lastAction ? "pt-2" : "py-2 border-b border-gray-300"}`}
              type="button"
              onClick={()=>openModal(item.id,item.action)}
            >
              <span className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full flex-center bg-gray-100">
                  <Icon size={14} />
                </span>
                <span className="text-xs font-medium">{item.name}</span>
              </span>
              <FiArrowRight size={14}/>
            </button>
          );
        })}
      </div>
    </div>
  );
}
