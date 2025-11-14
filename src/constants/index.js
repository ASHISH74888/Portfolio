import {
  novalearn,
  ponggame,
  portfolio,
  backend,
  creator,
  coursera,
  hr,
  cp,
  fcc,
  mobile,
  web,
  ideas,
  concepts,
  designs,
  code,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "achievement",
    title: "Achievement",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Web Developer",
    icon: creator,
  },
];

const achievements = [
  {
    title: ["FreeCodeCamp"],
    company_name: "freeCodeCamp",
    icon: fcc,
    iconBg: "#383E56",
    date: "May 2024",
    points: ["Responsive Web Design", "JavaScript"],
    credential: [
      "https://freecodecamp.org/certification/Jayant-1/responsive-web-design",
      "https://freecodecamp.org/certification/Jayant-1/responsive-web-design",
    ],
  },
  {
    title: ["HackerRank"],
    company_name: "HackerRank",
    icon: hr,
    iconBg: "#E6DEDD",
    date: "Apr 2025",
    points: [
      "Python (Basic) Certificate",
      "SQL (Basic) Certificate",
      "CSS (Basic) Certificate",
      "Go (Basic) Certificate",
    ],
    credential: [
      "https://www.hackerrank.com/certificates/b011ba865ccf",
      "https://www.hackerrank.com/certificates/633d92ea00fe",
      "https://www.hackerrank.com/certificates/c9bfa3c0b9e7",
      "https://www.hackerrank.com/certificates/b5ee5bc85229",
    ],
  },
  {
    title: ["Certiport"],
    company_name: "Certiport",
    icon: cp,
    iconBg: "#383E56",
    date: "Apr 2025",
    points: ["IT Specialist - HTML and CSS", "IT Specialist - Databases"],
    credential: [
      "https://www.credly.com/badges/c59ff7d1-7af2-4dcb-8c57-d2bd6a6d1f44/linked_in_profile",
      "https://www.credly.com/badges/61128af2-38bc-4299-b862-157ba2ca2edb/linked_in_profile",
    ],
  },
  {
    title: ["Coursera"],
    company_name: "Coursera",
    icon: coursera,
    iconBg: "#0056d2",
    date: "Jul 2025",
    points: ["IBM Full Stack Software Developer"],
    credential: ["https://coursera.org/verify/professional-cert/8R7RY7URFI6O"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ashish proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ashish does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Ashish boosted our website traffic by 50% through his smart optimization. We are Truly grateful!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Peer-to-Peer File Transfer System",
    description:
      "Real-time file sharing platform that streams large payloads between devices without centralized servers, pairing secure RESTful middleware with a responsive web client.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "ejs",
        color: "pink-text-gradient",
      },
    ],
    image: novalearn,
    source_code_link: "https://github.com/ASHISH74888",
  },
  {
    name: "AI Career Path — Guidance App",
    description:
      "AI-powered application that recommends tailored learning paths, courses, and job roles to help users navigate their journey into artificial intelligence.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ml",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: ponggame,
    source_code_link: "https://github.com/ASHISH74888",
  },
  {
    name: "Wallet Rewards Platform",
    description:
      "Enterprise-grade rewards management system leveraging microservices, cron orchestration, and Cashfree payouts to unlock new monetisation channels for EV charging.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "kafka",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ASHISH74888",
  },
];

const words = [
  { text: "Ideas", imgPath: ideas, font: "Arial, sans-serif" },
  {
    text: "Concepts",
    imgPath: concepts,
    font: "'Courier New', Courier, monospace",
  },
  {
    text: "Designs",
    imgPath: designs,
    font: "'Times New Roman', Times, serif",
  },
  { text: "Code", imgPath: code, font: "'Fira Mono', monospace" },
  {
    text: "Ideas",
    imgPath: ideas,
    font: "'Comic Sans MS', cursive, sans-serif",
  },
  { text: "Concepts", imgPath: concepts, font: "'Roboto', sans-serif" },
  { text: "Designs", imgPath: designs, font: "'Georgia', serif" },
  { text: "Code", imgPath: code, font: "'Source Code Pro', monospace" },
];

const experiences = [
  {
    title: "Software Developer Engineer Intern",
    companyName: "Bolt.Earth",
    icon: backend,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Architected event-driven Connectionless Sync system using Kafka, AVRO schema registry, and Elasticsearch pipelines, enabling autonomous raw log synchronization and improving user experience by 90%.",
      "Engineered wallet rewards management platform with enterprise-grade architecture, microservices, and CRON-driven workflows, generating $5K+ additional revenue through new reward flows.",
      "Built and deployed scalable REST APIs with Node.js, TypeScript, and MongoDB, enhancing backend efficiency and powering high-volume services.",
      "Automated BLE charger log processing via Kafka + Elasticsearch, improving booking data reliability and saving $2.4K annually in operational overhead.",
      "Implemented cron-based monthly revenue transfer system using Cashfree integration with robust idempotency safeguards for transaction reliability.",
      "Refactored critical dashboard APIs, reducing MongoDB calls from 4 to 1 and improving query performance for 6K+ records.",
      "Collaborated with cross-functional teams to deliver Sprints and In-App Review features under tight deadlines, ensuring smooth releases aligned with business goals.",
    ],
  },
  {
    title: "Backend Engineering Intern",
    companyName: "Celebal Technologies",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Designed scalable APIs and cloud services using Node.js, Express.js, and SQL/NoSQL databases.",
      "Contributed to cloud deployment workflows and backend architecture on AWS.",
      "Improved API performance, security, and collaborated in agile sprint planning with cross-functional teams.",
    ],
  },
  // {
  //   title: "Backend Developer",
  //   companyName: "Tech Projects",
  //   icon: backend,
  //   iconBg: "#E6DEDD",
  //   date: "Aug 2023 - Dec 2023",
  //   points: [
  //     "Developed RESTful APIs using Node.js and Express.js",
  //     "Database design and management using MongoDB and SQL",
  //     "Implemented authentication and authorization systems",
  //     "Worked on server optimization and performance tuning",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   companyName: "Learning Projects",
  //   icon: mobile,
  //   iconBg: "#383E56",
  //   date: "May 2023 - July 2023",
  //   points: [
  //     "Built responsive UI components using React and Tailwind CSS",
  //     "Implemented state management with Redux and Context API",
  //     "Created interactive animations and transitions with Framer Motion",
  //     "Collaborated on real-time project deployments",
  //   ],
  // },
  // {
  //   title: "Junior Web Developer",
  //   companyName: "Portfolio Projects",
  //   icon: creator,
  //   iconBg: "#0056d2",
  //   date: "Jan 2023 - April 2023",
  //   points: [
  //     "Started learning web development fundamentals",
  //     "Built multiple portfolio projects to showcase skills",
  //     "Learned Git and version control best practices",
  //     "Developed projects using HTML, CSS, and JavaScript",
  //   ],
  // },
];

export { achievements, experiences, projects, services, testimonials, words };
