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
  tailwind,
  nodejs,
  nasa,
  sou,
  dennys,
  wordle,
  rFinal,
  diceGame,
  threejs,
  cpp,
  rLogo,
  python,
  illustrator,
  photoshop,
  premierePro,
  afterEffects,
  github,
  linkedin,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "R",
    icon: rLogo,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premierePro,
  },
  {
    name: "Adobe After Effects",
    icon: afterEffects,
  },
];

const experiences = [
  {
    title: "NASA-Funded Research Intern - Google Earth Engine",
    company_name: "NASA",
    icon: nasa,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    skills:
      "Google Earth Engine · JavaScript · R (Programming Language) · Remote Sensing · Data Analysis · Python (Programming Language)",
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
    skills: "Communication · Mac OS · Windows OS · Problem Solving",
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
    skills:
      "Social Media Management · Marketing · Adobe Illustrator · Adobe Photoshop · Adobe Premiere Pro · Self-management",
    points: [
      "Served as the administrative assistant of graphic design, managing and updating visual content for all Southern Oregon University Housing operations, events, and informational materials using Adobe Creative Cloud programs.",
      "Revamped all housing floor plan documents, covering thousands of square feet of property within one week. This initiative provided hundreds of students with enhanced documents and resulted in significant cost savings for the university.",
      "Conducted periodic audits of social media accounts to ensure content was current, accurate, and aligned with the values and mission of University Housing.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Denny's Scalper Bot",
    description: "My attempt at getting a The Everyday Value Tee Scalper Bot",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "green-text-gradient",
      },
    ],
    image: dennys,
    source_code_link: "https://github.com/DogeLovesHipster/Dennys-Scalper-Bot",
  },
  {
    name: "Discord Wordle Bot",
    description:
      "A fun project that taught me a method of implementing a Discord bot (in this Wordle since that was trendy).",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Makefile",
        color: "green-text-gradient",
      },
      {
        name: "Discord API",
        color: "pink-text-gradient",
      },
    ],
    image: wordle,
    source_code_link: "https://github.com/DogeLovesHipster/Discord-Wordle-Bot",
  },
  {
    name: "ES386 R Final",
    description:
      "This was my final exam work for my ES class teaching me about R. I think I can confidently say that I enjoy Python way more, but I still think R is pretty neat on quick data science stuff. Just thought I'd leave this repo up to show that I think I know how R works. At least enough to print hello world!",
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
    ],
    image: rFinal,
    source_code_link: "https://github.com/DogeLovesHipster/ES386_Final_Exam",
  },
  {
    name: "CS333 - Lab1 - Mendoza",
    description:
      "A simple dice roll program that I made for my CS333 class. This is a game that allows the user to refresh or clicka  button to roll dice to have a dice figt!.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: diceGame,
    source_code_link: "https://github.com/SOU-Boscoe/lab1-DogeLovesHipster",
    demo_link: "/diceGame/index.html",
  },
];

const contact = [
  {
    name: "Github",
    link: "https://github.com/DogeLovesHipster",
    icon: github,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mendoza-sergio",
    icon: linkedin,
  },
];

export { services, technologies, experiences, testimonials, projects, contact };
