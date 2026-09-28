"use client";

import { FiFilter } from "react-icons/fi";
import Select from "../ui/Select";
import { useState } from "react";
import { projectTypes } from "@/libs/projectTypes";
import SelectCalender from "../ui/SelectCalender";

const StatusDropdown = [
  {
    label: "All Statuses",
    value: "all"
  },
  {
    label: "Confirmed",
    value: "confirmed"
  },
  {
    label: "Pending",
    value: "pending"
  },
  {
    label: "Rescheduled",
    value: "rescheduled"
  },
  {
    label: "Rejected",
    value: "rejected"
  },
];

const ServiceDropdown = [
  {
    label: "All Services",
    value:"all"
  },
  ...projectTypes
]


export default function BookingFilter() {
  const [selectedStatus, setSelectedStatus] = useState<string>(StatusDropdown[0].value);
  const [selectedService, setSelectedService] = useState<string>(ServiceDropdown[0].value);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Handle clear filter
  const clearFilter = ()=>{
    setSelectedStatus(StatusDropdown[0].value);
    setSelectedService(ServiceDropdown[0].value);
    setSelectedDate(null);
  }

  return (
    <div className="w-full p-6 white-bg border border-gray-300 rounded-xl">
      <div className="flex-center-between mb-4">
        <div className="flex items-center gap-3">
          <FiFilter aria-hidden/>
          <h4 className="font-bold text-lg">Filters</h4>
        </div>
        <button onClick={clearFilter} className="font-semibold text-xs cursor-pointer">Clear all</button>
      </div>
      
      <div className="space-y-3">
        <Select options={StatusDropdown} value={selectedStatus} onChange={(value)=>setSelectedStatus(value)}/>
        <Select options={ServiceDropdown} value={selectedService} onChange={(value)=>setSelectedService(value)}/>
        <SelectCalender placeholder="Select Date" value={selectedDate} onChange={(date)=>setSelectedDate(date)}/>
      </div>
    </div>
  );
}
