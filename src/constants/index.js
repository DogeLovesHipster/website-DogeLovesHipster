import {
  logo,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  nasa,
  sou,
  dennys,
  wordle,
  rFinal,
  cpp,
  rLogo,
  python,
  illustrator,
  photoshop,
  premierePro,
  afterEffects,
  github,
  linkedin,
  youtube,
  watersofthack,
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
  {
    title: "Software Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    skills:
      "JavaScript · React · MongoDB · OpenAI Products · Google Cloud Platform (GCP)",
    points: [
      "Spearheaded the development of an AR mobile game using React Native and Expo, enhancing client's user engagement on iOS and Android platforms.",
      "Engineered a scalable MongoDB backend hosted on Google Cloud VMs, integrating Google Analytics for enhanced data-driven decision-making.",
      "Implemented OpenAI APIs for AI narrators and responsive QR integration, elevating game interactivity and styling customization.",
    ],
  },
  {
    title: "NASA-Funded Software Engineering Intern",
    company_name: "NASA",
    icon: nasa,
    iconBg: "#383E56",
    date: "Oct 2023 - Mar 2024",
    skills:
      "Google Earth Engine · JavaScript · R (Programming Language) · Remote Sensing · Data Analysis · Python (Programming Language)",
    points: [
      "Leveraged interpersonal skills to collaborate with various universities, performing a comprehensive analysis of the carbon export for thousands of rivers in the U.S.",
      "Utilized satellite remote sensing and programmed surface reflectance datasets from U.S. rivers in JavaScript, contributing Landsat 8 reflectance bands to develop a geospatial model incorporating data and hydrology to estimate fluxes.",
      "Streamlined operations and ensured long-term scalability by automating point placement for thousands of USGS water surveying stations across the U.S., significantly enhancing data accuracy and accessibility.",
    ],
  },
  {
    title: "IT Analyst II",
    company_name: "Southern Oregon University",
    icon: sou,
    iconBg: "#383E56",
    date: "Sept 2022 - June 2024",
    skills:
      "Communication · Mac OS · Windows OS · Linux OS · Problem Solving · Bash · Powershell",
    points: [
      "Managed software installations and updates on lab computers, ensuring compatibility and optimal performance for hundreds of machines across the campus. Assisted in the physical setup and lifting of IT equipment during upgrades and new installations.",
      "Coordinated with faculty and IT application administrator staff to implement new technology solutions that enhance learning experiences.",
      "Managed software installations and updates on lab computers, ensuring compatibility and optimal performance for hundreds of machines across the campus.",
      "Developed and implemented procedures for organizing and maintaining lab and classroom equipment and supplies to facilitate ease of use for non-technical individuals throughout the university year. Maintained a 100% clear ticket queue across campus.",
      "Employed problem-solving skills to resolve challenging and newly discovered issues in Windows OS, Linux OS, and Mac OS environments, using professional troubleshooting methods to ensure timely resolution. Achieved exemplary customer service by managing and resolving over 96% of IT helpdesk support tickets on the first call.",
    ],
  },
  {
    title: "Social Media and Marketing Admin Assistant",
    company_name: "Southern Oregon University",
    icon: sou,
    iconBg: "#383E56",
    date: "Oct 2019 - June 2024",
    skills:
      "Social Media Management · Marketing · Adobe Illustrator · Adobe Photoshop · Adobe Premiere Pro · Self-management",
    points: [
      "Revamped all housing floor plan documents, covering thousands of square feet of property within one week. This initiative provided around 1,709 on-campus students with enhanced documents, resulting in significant cost savings for the university.",
      "Served and managed as the administrative assistant of graphic design, managing and updating visual content for all Southern Oregon University Housing operations, events, and informational materials using Adobe Creative Cloud programs.",
      "Conducted periodic audits of social media accounts to ensure content was current, accurate, and aligned with the mission of the University.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Denny's Scalper Bot",
    description: "My attempt at getting a The Everyday Value Tee Scalper Bot!",
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
    // youtube_link: "",
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
    // youtube_link: "",
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
    // youtube_link: "",
  },
  {
    name: "WaterSoftHack Capstone Project Turbidity Dashboard",
    description:
      "THIS IS TEMP: This was my capstone project for my WaterSoftHack class. I was the team lead and I was responsible for the design and implementation of the turbidity dashboard. Entirely made by me in around 8 hours with plenty of focus and determination. Enjoy the experience and the rough edges of the beautiful aesthetic of this website.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: watersofthack,
    source_code_link: "",
  }
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

export { services, experiences, testimonials, projects, contact };
