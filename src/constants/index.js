import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nasa,
  sou,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Geospatial Technology Specialist",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "NASA-Funded Research Intern - Google Earth Engine",
    company_name: "NASA",
    icon: nasa,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    skills: "Google Earth Engine · JavaScript · R (Programming Language) · Remote Sensing · Data Analysis · Python (Programming Language)",
    points: [
      "Collaborated with various universities to handle research data, performing a comprehensive analysis of the carbon export from rivers to coastal oceans.",
      "Utilized satellite remote sensing and programmed datasets of surface reflectance from U.S. rivers in Javascript, contributing to the development of a model that incorporates data and hydrology to estimate fluxes.",
      "Worked closely with the internship mentor to align project objectives, and aspirations, ultimately creating a scientifically backed analysis with the available data",
    ],
  },
  {
    title: "Lab and Classroom Tech",
    company_name: "Southern Oregon University",
    icon: sou,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Present",
    skills:"Communication · Mac OS · Windows OS · Problem Solving",
    points: [
      "Coordinated with faculty and IT staff to identify and implement new technology solutions that enhance learning experiences.",
      "Managed software installations and updates on lab computers, ensuring compatibility and optimal performance for hundreds of machines across the campus.",
      "Developed and implemented procedures for organizing and maintaining lab and classroom equipment and supplies to facilitate ease of use for non-technical individuals throughout the university year.",
      "Resolved challenging and newly discovered issues in both Windows OS and Mac OS environments using professional troubleshooting methods, ensuring timely resolution.",
    ],
  },
  {
    title: "Social Media and Marketing Admin Assistant",
    company_name: "Southern Oregon University",
    icon: sou,
    iconBg: "#383E56",
    date: "Oct 2019 - Present",
    skills: "Social Media Management · Marketing · Adobe Illustrator · Adobe Photoshop · Adobe Premiere Pro · Self-management",
    points: [
      "Served as the administrative assistant of graphic design, managing and updating visual content for all Southern Oregon University Housing operations, events, and informational materials using Adobe Creative Cloud programs.",
      "Revamped all housing floor plan documents, covering thousands of square feet of property within one week. This initiative provided hundreds of students with enhanced documents and resulted in significant cost savings for the university.",
      "Conducted periodic audits of social media accounts to ensure content was current, accurate, and aligned with the values and mission of University Housing.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
