type ProjectCategory =
  | "residential"
  | "commercial"
  | "renovation-remodeling"
  | "design-build";

type ProjectSection = {
  text: string;
  image: string;
};

export type ProjectType = {
  id: number;
  img: string;
  title: string;
  shortDesc: string;
  location: string;
  category: ProjectCategory;
  slug: string;
  clientName: string;
  size: string;
  year: string;
  status: string;

  overview: string;

  designPlanning: ProjectSection;

  featuresFunctions: {
    text: string;
    image: string;
    features: string[];
  };

  buildProcess: ProjectSection;

  outcomeImpact: ProjectSection;
};

export const projectsData: ProjectType[] = [
  {
    id: 1,
    img: "/projects/residential/main.jpg",
    title: "Desert Vista Luxury Residence",
    shortDesc:
      "A modern luxury home featuring open living spaces, premium finishes, and a seamless indoor-outdoor design inspired by the desert landscape.",
    location: "Scottsdale, Arizona",
    category: "residential",
    slug: "desert-vista-luxury-residence",
    clientName: "Daniel Brooks",
    size: "17000",
    year: "2024",
    status: "completed",

    overview:
      "The Desert Vista Luxury Residence is a modern custom home designed around spacious living, natural light, and a strong connection to the surrounding desert landscape. The project focused on creating an elegant yet comfortable environment with carefully selected materials and seamless transitions between indoor and outdoor spaces.",

    designPlanning: {
      text: "Our design and planning process focused on balancing modern architectural details with the natural character of Scottsdale. The layout was carefully developed to maximize natural light, create open gathering spaces, and establish a smooth connection between the main living areas and outdoor spaces.",
      image: "/projects/residential/planning.jpg",
    },

    featuresFunctions: {
      text: "Every element of the home was planned with both aesthetics and everyday functionality in mind. The result is a refined living environment that feels spacious, practical, and connected to its surroundings.",
      image: "/projects/residential/features.jpg",
      features: [
        "Open-concept kitchen and living area",
        "Large floor-to-ceiling windows",
        "Seamless indoor-outdoor living spaces",
        "Premium natural stone and wood finishes",
        "Custom lighting throughout the residence",
        "Modern outdoor entertaining area",
      ],
    },

    buildProcess: {
      text: "Construction was carefully managed from the initial site preparation through the final finishing stages. Our team coordinated the various trades, materials, and construction phases to maintain quality while keeping the project moving efficiently.",
      image: "/projects/residential/process.jpg",
    },

    outcomeImpact: {
      text: "The completed residence delivers a sophisticated modern home that combines luxury, comfort, and functionality. The thoughtful design creates an inviting environment for everyday family life while providing beautiful spaces for entertaining and enjoying the Arizona landscape.",
      image: "/projects/residential/outcome.jpg",
    },
  },

  {
    id: 2,
    img: "/projects/commercial/main.jpg",
    title: "The Boulevard Commercial Center",
    shortDesc:
      "A contemporary commercial development designed to provide functional retail and office spaces with a focus on efficiency and modern architecture.",
    location: "Denver, Colorado",
    category: "commercial",
    slug: "the-boulevard-commercial-center",
    clientName: "Christopher Hayes",
    size: "12000",
    year: "2023",
    status: "completed",

    overview:
      "The Boulevard Commercial Center was developed to create a modern, flexible destination for retail and professional businesses. The project combined contemporary architecture with practical layouts designed to support a wide range of commercial uses.",

    designPlanning: {
      text: "Planning focused on creating an efficient site layout with clear circulation, accessible entrances, and flexible interior spaces. Architectural elements were selected to give the development a contemporary identity while maintaining long-term functionality.",
      image: "/projects/commercial/planning.jpg",
    },

    featuresFunctions: {
      text: "The commercial center was designed around flexibility, accessibility, and a strong customer experience. Each space was planned to accommodate changing business requirements while maintaining a consistent architectural character.",
      image: "/projects/commercial/features.jpg",
      features: [
        "Flexible retail and office layouts",
        "Modern exterior architectural design",
        "Efficient parking and site circulation",
        "Energy-conscious lighting systems",
        "Accessible entrances and pathways",
        "Durable commercial-grade finishes",
      ],
    },

    buildProcess: {
      text: "The construction process involved coordinating structural work, building systems, interior finishes, and exterior improvements. Careful scheduling helped maintain progress across multiple areas of the development.",
      image: "/projects/commercial/process.jpg",
    },

    outcomeImpact: {
      text: "The finished development provides a modern and adaptable commercial environment designed to support businesses and their customers. Its flexible spaces and contemporary appearance create a strong foundation for long-term commercial use.",
      image: "/projects/commercial/outcome.jpg",
    },
  },

  {
    id: 3,
    img: "/projects/build/main.jpg",
    title: "Modern Retreat",
    shortDesc:
      "A contemporary retreat designed with clean architectural lines, comfortable living spaces, and a strong connection to the surrounding landscape.",
    location: "Charlotte, North Carolina",
    category: "design-build",
    slug: "modern-retreat",
    clientName: "Matthew Reynolds",
    size: "11000",
    year: "2022",
    status: "completed",

    overview:
      "Modern Retreat was conceived as a peaceful contemporary home that blends clean architecture with the natural beauty of its surroundings. The project emphasized simplicity, comfort, and a strong relationship between interior and exterior spaces.",

    designPlanning: {
      text: "The design process centered on creating a calm and open environment. The floor plan was organized around natural movement, generous glazing, and carefully positioned outdoor spaces that extend the living experience beyond the interior.",
      image: "/projects/build/planning.jpg",
    },

    featuresFunctions: {
      text: "The home combines minimalist design with practical features that improve everyday living. Materials, lighting, and spatial planning were carefully selected to create a cohesive contemporary environment.",
      image: "/projects/build/features.jpg",
      features: [
        "Clean contemporary architectural lines",
        "Open-plan living and dining spaces",
        "Expansive windows with landscape views",
        "Custom kitchen and cabinetry",
        "Integrated indoor-outdoor entertaining areas",
        "Low-maintenance exterior landscaping",
      ],
    },

    buildProcess: {
      text: "The design-build approach allowed the architectural vision and construction process to remain closely connected. Materials and construction details were coordinated throughout the project to achieve a consistent final result.",
      image: "/projects/build/process.jpg",
    },

    outcomeImpact: {
      text: "The completed retreat offers a comfortable and visually refined living environment that feels naturally connected to the landscape. The result is a modern home designed for both relaxation and everyday living.",
      image: "/projects/build/outcome.jpg",
    },
  },

  {
    id: 4,
    img: "/projects/remodeling/main.jpg",
    title: "Sunset Valley Family Home",
    shortDesc:
      "A thoughtfully designed family home combining functional spaces, warm finishes, and modern details for comfortable everyday living.",
    location: "Portland, Oregon",
    category: "renovation-remodeling",
    slug: "sunset-valley-family-home",
    clientName: "Jessica Morgan",
    size: "14000",
    year: "2021",
    status: "completed",

    overview:
      "The Sunset Valley Family Home renovation transformed an existing residence into a more functional and welcoming space for modern family life. The project focused on improving the layout, updating finishes, and creating a stronger sense of connection throughout the home.",

    designPlanning: {
      text: "Planning began with understanding how the family used the existing home and identifying areas that limited functionality. The design introduced better circulation, improved storage, and updated living spaces while maintaining the character of the property.",
      image: "/projects/remodeling/planning.jpg",
    },

    featuresFunctions: {
      text: "The renovation introduced practical improvements throughout the home while creating a warmer and more contemporary visual identity.",
      image: "/projects/remodeling/features.jpg",
      features: [
        "Updated open-concept living area",
        "Modernized kitchen",
        "Improved storage solutions",
        "Updated flooring and interior finishes",
        "Modern lighting fixtures",
        "Improved indoor-outdoor connection",
      ],
    },

    buildProcess: {
      text: "The renovation was completed in carefully coordinated phases to minimize disruption and maintain construction quality. Existing conditions were addressed before new finishes and fixtures were installed.",
      image: "/projects/remodeling/process.jpg",
    },

    outcomeImpact: {
      text: "The renovated home now provides a brighter, more functional, and comfortable environment for the family. The improvements modernized the property while making the space better suited to everyday living.",
      image: "/projects/remodeling/outcome.jpg",
    },
  },

  {
    id: 5,
    img: "/projects/remodeling/main-2.jpg",
    title: "Home Renovation",
    shortDesc:
      "A complete residential renovation focused on improving functionality, updating finishes, and creating a more modern and inviting home.",
    location: "Tampa, Florida",
    category: "renovation-remodeling",
    slug: "home-renovation",
    clientName: "Lauren Bennett",
    size: "22000",
    year: "2020",
    status: "completed",

    overview:
      "This complete home renovation focused on transforming an outdated residential interior into a modern, functional, and inviting living environment. The project addressed both aesthetic improvements and practical upgrades throughout the home.",

    designPlanning: {
      text: "The planning phase focused on identifying opportunities to improve the home's layout, finishes, and overall usability. The design introduced a cleaner visual language while ensuring that the renovated spaces remained practical for everyday use.",
      image: "/projects/remodeling/planning-2.jpg",
    },

    featuresFunctions: {
      text: "The renovation combined modern finishes with practical improvements designed to make the home easier and more enjoyable to live in.",
      image: "/projects/remodeling/features-2.jpg",
      features: [
        "Updated kitchen and living spaces",
        "Modern bathroom finishes",
        "New flooring throughout the home",
        "Updated lighting and electrical fixtures",
        "Fresh interior paint and finishes",
        "Improved storage and functionality",
      ],
    },

    buildProcess: {
      text: "The construction process included demolition, preparation, installation, finishing, and final detailing. Each phase was coordinated to ensure the new materials and systems integrated properly with the existing structure.",
      image: "/projects/remodeling/process-2.jpg",
    },

    outcomeImpact: {
      text: "The completed renovation gave the home a fresh and contemporary feel while significantly improving its functionality. The updated spaces provide a more comfortable environment and give the property a renewed sense of value.",
      image: "/projects/remodeling/outcome-2.jpg",
    },
  },
];
