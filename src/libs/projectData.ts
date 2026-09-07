type ProjectCategory =
  | "residential"
  | "commercial"
  | "renovation-remodeling"
  | "design-build";

export type ProjectType = {
  img: string;
  title: string;
  shortDesc: string;
  location: string;
  category: ProjectCategory;
  slug: string;
};

export const projectsData: ProjectType[] = [
  {
    img: "/projects/project-1.jpg",
    title: "Desert Vista Luxury Residence",
    shortDesc:
      "A modern luxury home featuring open living spaces, premium finishes, and a seamless indoor-outdoor design inspired by the desert landscape.",
    location: "Scottsdale, Arizona",
    category: "residential",
    slug: "desert-vista-luxury-residence",
  },

  {
    img: "/projects/project-2.jpg",
    title: "The Boulevard Commercial Center",
    shortDesc:
      "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    location: "Phoenix, Arizona",
    category: "commercial",
    slug: "the-boulevard-commercial-center",
  },

  {
    img: "/projects/project-3.jpg",
    title: "Modern Retreat",
    shortDesc:
      "A contemporary retreat designed with clean architectural lines, comfortable living spaces, and a strong connection to the surrounding landscape.",
    location: "Paradise Valley, Arizona",
    category: "design-build",
    slug: "modern-retreat",
  },

  {
    img: "/projects/project-4.jpg",
    title: "Sunset Valley Family Home",
    shortDesc:
      "A thoughtfully designed family home combining functional spaces, warm finishes, and modern details for comfortable everyday living.",
    location: "Mesa, Arizona",
    category: "renovation-remodeling",
    slug: "sunset-valley-family-home",
  },

  {
    img: "/projects/project-5.jpg",
    title: "Home Renovation",
    shortDesc:
      "A complete residential renovation focused on improving functionality, updating finishes, and creating a more modern and inviting home.",
    location: "Tempe, Arizona",
    category: "renovation-remodeling",
    slug: "home-renovation",
  },
];