type StatusType = "active" | "inactive" | "suspended";

export type TeamProp = {
  img: string;
  name: string;
  title: string;
  status: StatusType;
};

export const membersData:TeamProp[] = [
  {
    img: "/teams/michael-anderson.jpg",
    name: "Michael Anderson",
    title: "Founder & General Contractor",
    status: "active",
  },
  {
    img: "/teams/david-wilson.jpg",
    name: "David Wilson",
    title: "Senior Construction Specialis",
    status: "active",
  },
  {
    img: "/teams/sarah-mitchell.jpg",
    name: "Sarah Mitchell",
    title: "Project Manager",
    status: "active",
  },
];
