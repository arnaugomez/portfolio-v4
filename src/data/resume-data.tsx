import {
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  JojoMobileLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Arnau Gómez",
  initials: "AG",
  location: "Barcelona, Spain",
  locationLink: "https://www.google.com/maps/place/Barcelona",
  about: "Frontend Developer | Web, desktop & mobile",
  summary:
    "For the past 6 years, I have helped large companies like Amazon build modern web and mobile apps that perform at scale. My focus is on TypeScript, React and JavaScript UI frameworks, with a strong emphasis on performance, QA and scalability.",
  avatarUrl: "https://avatars.githubusercontent.com/u/66358043?v=4",
  personalWebsiteUrl: "https://www.arnaugomez.com",
  contact: {
    email: undefined,
    tel: undefined,
    // email: "bartosz.jarocki@hey.com",
    // tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arnaugomez",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arnaugomez",
        icon: LinkedInIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@arnau-gomez",
        icon: YoutubeIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "U.N.E.D.",
      degree: "Bachelor's Degree in Computer Science",
      start: "2020",
      end: "2024",
    },
    {
      school: "University of Helsinki",
      degree: "Full Stack Open program",
      start: "2019",
      end: "2020",
    },
    {
      school: "freeCodeCamp",
      degree: "Full Stack Web Development Bootcamp",
      start: "2018",
      end: "2021",
    },
    {
      school: "Autonomous University of Barcelona",
      degree: "Bachelor's Degree in Teacher Studies",
      start: "2016",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Milú",
      link: "https://mrmilu.com/en",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: ConsultlyLogo,
      start: "2021",
      end: null,
      description: `Milú builds mobile and web applications for large international businesses. Inside the frontend team, I specialised in TypeScript and React, and pioneered the adoption of Flutter for multi-platform applications.

These are my main contributions:
🍊 Developed e-commerce sites for major retailers like Amazon, with millions of monthly users.
🤖 Created a code generator that saved +100 hours across all projects.
💳 Built a payment processing system used by 10K daily customers
🧪 Implemented an automated testing framework that saved 8 weekly hours in QA costs.
🧩 Created and maintained 5 starter templates that saved 1 week of development work per project.
🏎️ Automated the generation of +10K high-performance Next.js and Gatsby sites with 100% Lighthouse performance score
🎥 Built an AI-powered video processing workflow used by thousands of professionals of the automotive sector.`,
    },
    {
      company: "YouTube",
      link: "https://www.youtube.com/@arnau-gomez",
      badges: ["Remote"],
      title: "Technical Educator",
      logo: ParabolLogo,
      start: "2018",
      end: null,
      description:
        "Taught coding and technical skills to +1M viewers on YouTube, TikTok and DEV",
    },
    {
      company: "DiverTeach",
      link: "https://diverteach.netlify.app",
      badges: ["Remote"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: `Managed a small team of developers. We created an online classroom manager for creative teachers, designed to save 100 hours of resource planning every year. The app is built with TypeScript, React, Redux and SASS.`,
    },
    {
      company: "Autonomous University of Barcelona - GRETEL Research Group",
      link: "https://gretel.cat",
      badges: [],
      title: "Web Developer & Researcher in Digital Literature",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description: `As a developer of the GRETEL research group website, I leveraged innovative SEO strategies to 2x its traffic. I worked on a research paper on Digital Literature and the role of hypermedia applications in education. The visibility of the academic articles grew 10x thanks to my contributions to the academic databases.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Remix",
    "Node.js",
    "Vue",
    "Angular",
    "Svelte",
    "Dart",
    "Flutter",
    "CSS/SASS/LESS/Tailwind",
    "GraphQL",
    "AWS",
    "GCP",
    "Azure",
  ],
  projects: [
    {
      title: "ClubMemo",
      techStack: ["TypeScript", "React", "Node.js", "MongoDB", "AI & LLMs"],
      description:
        "AI app that transforms any PDF into a personalized interactive course based on science-proven effective study techniques.",
      logo: ParabolLogo,
      link: {
        label: "ClubMemo",
        href: "https://www.clubmemo.com",
      },
    },
    {
      title: "Pepecar",
      techStack: ["E-commerce", "Performance", "Secure payments"],
      description:
        "Car rental service with thousands of daily active users. Improved the load speed of the website by 3x and built a secure payments workflow.",
      logo: EvercastLogo,
      link: {
        label: "Pepecar",
        href: "https://www.pepecar.com/",
      },
    },
    {
      title: "Nextlane",
      techStack: [
        "Mobile App",
        "Dart",
        "Flutter",
        "Concurrency",
        "Video processing",
        "AI",
      ],
      description:
        "AI-powered video processing workflow used by thousands of workers in the automotive industry.",
      logo: ConsultlyLogo,
      link: {
        label: "Nextlane",
        href: "https://www.nextlane.com/es/",
      },
    },
    {
      title: "Eterlast",
      techStack: ["Crypto", "Web3", "Ethereum", "NFTs"],
      description:
        "Full-featured Web3 exchange for trading sports NFTs and cryptocurrencies.",
      logo: ConsultlyLogo,
      link: {
        label: "Nextlane",
        href: "https://www.eterlast.com",
      },
    },
    {
      title: "Ambar",
      techStack: ["Mobile App", "Multiplatform App", "LegalTech"],
      description: "Professional app used by thousands of lawyers",
      logo: ConsultlyLogo,
      link: {
        label: "Ambar",
        href: "https://www.ambarpartners.com",
      },
    },
    {
      title: "Finnovating",
      techStack: ["Web App", "Social Network", "FinTech"],
      description:
        "FinTech social network that matches investors with startups, and helps businesses find partners.",
      logo: ConsultlyLogo,
      link: {
        label: "Finnovating",
        href: "https://finnovating.com",
      },
    },
    {
      title: "Amazon Specialized Marketplaces",
      techStack: ["E-commerce", "AWS", "Scalability"],
      description:
        "Partnership with Amazon and AWS in the development of custom marketplaces for specialized products with high traffic and scalability",
      logo: ConsultlyLogo,
      // link: {
      //   label: "Finnovating",
      //   href: "https://librosdelcole.es",
      // },
    },
    {
      title: "Opticalia",
      techStack: ["E-commerce", "Multiplatform", "Scalability"],
      description:
        "Maintained an international e-commerce marketplace with millions of monthly users. Developed custom multiplatform apps for in-store usage.",
      logo: ConsultlyLogo,
      link: {
        label: "Opticalia",
        href: "https://www.opticalia.com/es",
      },
    },
    {
      title: "Vamos",
      techStack: ["E-commerce", "Secure payments"],
      description:
        "Built a secure payments workflow for a large car rental website with thousands of monthly users.",
      logo: ConsultlyLogo,
      link: {
        label: "Vamos",
        href: "https://www.vamos.es",
      },
    },
    {
      title: "Mindbly",
      techStack: ["Online Learning", "Web App"],
      description: "Online learning platform for business coaches",
      logo: ConsultlyLogo,
      link: {
        label: "Mindbly",
        href: "https://www.mindbly.com",
      },
    },
    {
      title: "C Compiler",
      techStack: ["Compilers", "Java"],
      description:
        "Compiler for the C programming language, including lexer, parser and Assembly code generation. Final project of the Computer Science bachelor's degree.",
      logo: ConsultlyLogo,
      // link: {
      //   label: "Mindbly",
      //   href: "https://www.mindbly.com",
      // },
    },
  ],
} as const;
