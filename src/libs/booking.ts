type BookingStatus = "confirmed" | "pending" | "rescheduled" | "rejected";

export type BookingType = {
  id: string;
  date: Date;
  status: BookingStatus;
};


export const bookings:BookingType[] = [
  {
    id: "1",
    date: new Date(2026, 8, 18),
    status: "confirmed",
  },
  {
    id: "2",
    date: new Date(2026, 8, 21),
    status: "confirmed",
  },
  {
    id: "3",
    date: new Date(2026, 8, 22),
    status: "pending",
  },
  {
    id: "4",
    date: new Date(2026, 8, 23),
    status: "confirmed",
  },
  {
    id: "5",
    date: new Date(2026, 8, 20),
    status: "rescheduled",
  },
  {
    id: "6",
    date: new Date(2026, 8, 21),
    status: "rejected",
  },
];
