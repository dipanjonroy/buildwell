export type ServiceType = {
  category: string;
  img: string;
  title: string;
  text: string;
  overview: string[];
  quote: string;
  points: string[];
  url: string;
};

export const services: ServiceType[] = [
  {
    category: "residential",
    img: "/homepage/residential-service.jpg",
    title: "Residential Construction",
    text: "We build high-quality homes designed around your lifestyle, combining modern design, durable materials, and expert craftsmanship.",
    overview: [
      "Our residential construction services are designed to create beautiful, comfortable, and functional homes that are built around the way you live. Whether you are planning a completely new home or looking to bring a custom vision to life, our team works closely with you to understand your needs, preferences, and long-term goals.",
      "From the initial planning and construction process to interior finishing and final details, we focus on delivering exceptional workmanship at every stage. We use quality materials, proven construction methods, and careful attention to detail to create homes that are not only visually appealing but also durable, efficient, and built to last for years to come.",
    ],
    quote:
      "A home should be more than just a structure. It should be a space built around your lifestyle, your vision, and the moments that matter most.",
    points: [
      "Custom home building",
      "New home construction",
      "Interior & Exterior finishing",
      "Flooring & interior installation",
      "Electrical & plumbing work",
      "Outdoor & landscape improvements",
    ],
    url: "residential-construction",
  },

  {
    category: "commercial",
    img: "/homepage/commercial-service.jpg",
    title: "Commercial Construction",
    text: "From office spaces to retail buildings, we deliver efficient and reliable construction solutions that meet your business needs.",
    overview: [
      "Our commercial construction services help businesses create professional, functional, and efficient spaces that support their operations and future growth. From offices and retail environments to larger commercial developments, we approach every project with careful planning, reliable execution, and a strong focus on quality.",
      "We understand that commercial projects require attention to timelines, budgets, functionality, and safety. Our team coordinates the different stages of construction while maintaining clear communication throughout the project, helping ensure that your commercial space is completed efficiently and built to meet the demands of your business.",
    ],
    quote:
      "Great commercial spaces are built with purpose. We combine smart planning, quality craftsmanship, and reliable execution to create spaces where businesses can grow and succeed.",
    points: [
      "Office & Retail Spaces",
      "Commercial building construction",
      "Large-Scale Construction Projects",
      "Interior build-outs & finishing",
      "Electrical & plumbing installation",
      "Site preparation & development",
    ],
    url: "commercial-construction",
  },

  {
    category: "renovation-remodeling",
    img: "/homepage/remodeling-service.jpg",
    title: "Renovation & Remodeling",
    text: "Transform your existing space with our professional renovation services, improving functionality, comfort, and value.",
    overview: [
      "Our renovation and remodeling services are designed to transform outdated or inefficient spaces into modern, comfortable, and highly functional environments. Whether you want to refresh a single room, upgrade key areas, or completely transform your property, we develop solutions that balance design, practicality, and your specific needs.",
      "We handle every part of the remodeling process with careful planning and professional craftsmanship, from demolition and structural improvements to new finishes and final details. By combining quality materials with thoughtful design and reliable construction, we help improve the appearance, functionality, comfort, and long-term value of your property.",
    ],
    quote:
      "Every space has the potential for something better. We transform existing properties into places that feel fresh, functional, and made for the way you live.",
    points: [
      "Kitchen & Bathroom Remodeling",
      "Home Extensions & Upgrades",
      "Structural Improvements",
      "Flooring & Wall Renovations",
      "Interior & Exterior Upgrades",
      "Complete Home Renovations",
    ],
    url: "renovation-remodeling",
  },

  {
    category: "design-build",
    img: "/homepage/design-build-service.jpg",
    title: "Design & Build Services",
    text: "From initial concepts to final completion, we manage every stage of your project with a seamless and stress-free approach.",
    overview: [
      "Our design-build services provide a streamlined approach that brings planning, design, and construction together under one coordinated team. Instead of managing multiple contractors and professionals separately, you can work with one team throughout the entire process, making communication easier and keeping your project moving forward efficiently.",
      "From developing the initial concept and architectural plans to selecting materials, managing construction, and completing the final details, we take care of every stage of the project. Our goal is to create a smooth and transparent experience while delivering a finished space that reflects your vision, meets your practical requirements, and stays aligned with your budget and timeline.",
    ],
    quote:
      "From the first idea to the final detail, we bring every part of the process together. One team, one vision, and a smoother path from concept to completion.",
    points: [
      "Architectural Planning",
      "Material Selection & Guidance",
      "Complete Project Execution",
      "Project Planning & Coordination",
      "Budget & Cost Management",
      "Construction & Final Handover",
    ],
    url: "design-build-services",
  },
];
