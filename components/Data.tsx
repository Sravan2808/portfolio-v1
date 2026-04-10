import {
  SiGithub,
  SiLeetcode,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPython,
  SiFigma,
  SiPrisma,
  SiRedis,
  SiRedux,
  SiGreensock,
  SiLinux,
  SiReactquery,
  SiShadcnui,
  SiDrizzle,
  SiDaisyui,
  SiSocketdotio,
  SiLangchain,
  SiClerk,
  SiFoodpanda,
  SiJsonwebtokens,
  SiPostman,
  SiJavascript,
  SiVite,
  SiThreedotjs,
  SiGooglesearchconsole,
  SiLanggraph,
} from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  FaLinkedinIn,
  FaMedium,
  FaJava,
  FaAws,
  FaDatabase,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { MdMail } from "react-icons/md";
import { IoFlask } from "react-icons/io5";

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Sravan2808",
    icon: <SiGithub />,
  },
  {
    name: "Twitter",
    url: "https://x.com/SS19732004",
    icon: <BsTwitterX />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sravan-surya-a890b4261/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Medium",
    url: "https://medium.com/@sravansurya",
    icon: <FaMedium />,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/vsravansurya/",
    icon: <SiLeetcode />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/sravansurya_28?igsh=Z3JnZHZhaWp4cGZ3",
    icon: <FaInstagram />,
  },
];

export const skills = [
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
    url: "https://www.google.com/search?q=javascript",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    url: "https://www.google.com/search?q=typescript",
  },
  {
    name: "React",
    icon: <SiReact />,
    url: "https://www.google.com/search?q=react",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    url: "https://www.google.com/search?q=node.js",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    url: "https://www.google.com/search?q=express.js",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    url: "https://www.google.com/search?q=mongodb",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    url: "https://www.google.com/search?q=next.js",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    url: "https://www.google.com/search?q=tailwind+css",
  },
  {
    name: "Git",
    icon: <SiGit />,
    url: "https://www.google.com/search?q=git",
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    url: "https://www.google.com/search?q=docker",
  },
  {
    name: "Java",
    icon: <FaJava />,
    url: "https://www.google.com/search?q=java",
  },
  {
    name: "Python",
    icon: <SiPython />,
    url: "https://www.google.com/search?q=python",
  },
  {
    name: "Github",
    icon: <SiGithub />,
    url: "https://www.google.com/search?q=github",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    url: "https://www.google.com/search?q=figma",
  },
  {
    name: "Tanstack Query",
    icon: <SiReactquery />,
    url: "https://www.google.com/search?q=tanstack+query",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    url: "https://www.google.com/search?q=prisma",
  },
  {
    name: "Redis",
    icon: <SiRedis />,
    url: "https://www.google.com/search?q=redis",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    url: "https://www.google.com/search?q=redux",
  },
  {
    name: "SQL",
    icon: <FaDatabase />,
    url: "https://www.google.com/search?q=sql",
  },
  {
    name: "ShadCN",
    icon: <SiShadcnui />,
    url: "https://www.google.com/search?q=shadcn",
  },
  {
    name: "Gsap",
    icon: <SiGreensock />,
    url: "https://www.google.com/search?q=gsap",
  },
  {
    name: "Zustand",
    icon: <SiFoodpanda />,
    url: "https://www.google.com/search?q=zustand",
  }, // using db icon as fallback
  {
    name: "Linux",
    icon: <SiLinux />,
    url: "https://www.google.com/search?q=linux",
  },
  {
    name: "Drizzle",
    icon: <SiDrizzle />,
    url: "https://www.google.com/search?q=drizzle",
  },
  {
    name: "Aws",
    icon: <FaAws />,
    url: "https://www.google.com/search?q=aws",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
    url: "https://www.google.com/search?q=socket.io",
  },
];

export const projects = [
  {
    slug: "BattleAiArena",
    title: "Battle AI Arena",
    background: "/images/Purple.jpeg",
    previewImage: "/images/Coming Soon.jpeg", // no preview image yet
    demoVideo: null, // no demo video yet
    githubUrl: "https://github.com/Sravan2808/BattleAiArena",
    websiteUrl: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut.",
    stack: [
      {
        name: "Lorem",
        url: "https://www.google.com/search?q=Lorem",
      },
      {
        name: "Ipsum",
        url: "https://www.google.com/search?q=Ipsum",
      },
      {
        name: "Dolor",
        url: "https://www.google.com/search?q=Dolor",
      },
      {
        name: "Sit",
        url: "https://www.google.com/search?q=Sit",
      },
      {
        name: "Amet",
        url: "https://www.google.com/search?q=Amet",
      }
    ],
  },

  {
    slug: "s2chat",
    title: "S2Chat",
    background: "/images/GreenComic.jpeg",
    previewImage: "/images/S2Chat.png",
    demoVideo: "/Videos/demo/S2Chat.mp4",
    githubUrl: "https://github.com/Sravan2808/GenAiChat",
    websiteUrl: "https://genaichat.onrender.com/ui",
    description: ` S2Chat (AI-Powered Chat Tool) | React, Node.js, Express, WebSockets, Redux

Developed a full-stack real-time chat application featuring AI integrations, utilizing React for the frontend and Node.js/Express for the backend.
Architected a real-time messaging system using WebSockets, seamlessly integrating client-side socket listeners with backend event handlers.
Integrated advanced AI and utility services, including AI chat generation (ai.service), audio transcription (transcribe.controller), and live internet search capabilities.
Implemented secure user authentication featuring cookie-based session management, protected React routes, and email notifications.
Designed a highly interactive and responsive user interface using modern UI components, custom animations, and centralized state management via Redux Toolkit.
`,
    stack: [
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
        url: "https://www.google.com/search?q=javascript",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        url: "https://www.google.com/search?q=node.js",
      },
      {
        name: "React",
        icon: <SiReact />,
        url: "https://www.google.com/search?q=react",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        url: "https://www.google.com/search?q=express.js",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        url: "https://www.google.com/search?q=mongodb",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        url: "https://www.google.com/search?q=redux",
      },
      {
        name: "ShadCN UI",
        icon: <SiShadcnui />,
        url: "https://www.google.com/search?q=shadcn ui",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio />,
        url: "https://www.google.com/search?q=socket.io",
      },
      {
        name: "LangChain",
        icon: <SiLangchain />,
        url: "https://www.google.com/search?q=langchain",
      },
      {
        name: "NodeMailer",
        icon: <MdMail />,
        url: "https://www.google.com/search?q=nodemailer",
      },
    ],
  },

  {
    slug: "leetlab",
    title: "LeetLab",
    background: "/images/ComicYellow.jpeg",
    previewImage: "/images/LeetLab.png",
    demoVideo: null, // no demo video yet
    githubUrl: "https://github.com/Sravan2808/LeetLab",
    websiteUrl: "",
    description: `LeetLab is a full-stack coding platform inspired by LeetCode, designed to help users practice programming problems, execute code, and track their progress efficiently. The platform features secure authentication powered by Clerk with GitHub OAuth integration and role-based access control for Admin and User roles. It integrates the Judge0 API to enable real-time code compilation and execution against custom test cases.

An admin-only problem management system was developed using Prisma, allowing efficient creation and storage of coding problems and test cases. Additionally, the platform includes a submission tracking system that records user performance, execution results, and status history. To enhance structured learning, a playlist feature was implemented, enabling users to organize and practice problems in a guided manner.`,
    stack: [
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
        url: "https://www.google.com/search?q=javascript",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        url: "https://www.google.com/search?q=next.js",
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
        url: "https://www.google.com/search?q=prisma",
      },
      {
        name: "postgreSQL",
        icon: <BiLogoPostgresql />,
        url: "https://www.google.com/search?q=postgresql",
      },
      {
        name: "Clerk Auth",
        icon: <SiClerk />,
        url: "https://www.google.com/search?q=clerk+auth",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        url: "https://www.google.com/search?q=docker",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        url: "https://www.google.com/search?q=tailwind+css",
      },
      {
        name: "shadcn UI",
        icon: <SiShadcnui />,
        url: "https://www.google.com/search?q=shadcn+ui",
      },
    ],
  },

  {
    slug: "devmatch",
    title: "DevMatch",
    background: "/images/Blue.jpeg",
    previewImage: "/images/DevMatch.png",
    demoVideo: null, // no demo video yet
    githubUrl: "https://github.com/Sravan2808/DevTinder",
    websiteUrl: "https://devtinder-ebgf.onrender.com/",
    description: `Developed a full-stack matchmaking platform inspired by Tinder, designed specifically for developers to connect, collaborate, and build networks. The frontend was built using Vite and React, with React Router handling seamless navigation, Daisy UI for modern UI components, and Redux Toolkit for efficient state management.

Implemented a secure authentication system using JWT for authorization, Bcrypt for password hashing, and cookies with proper CORS configuration to ensure safe client-server communication. The application includes protected routes that validate user tokens and automatically redirect unauthorized users to the login page.

Key features include user profile management with real-time updates and toast notifications, connection request functionality (send, ignore, accept, reject), and a personalized developer feed. The platform ensures a smooth end-to-end user experience, including login/logout flows, dynamic navbar updates, and consistent state handling with Redux DevTools integration.

The application was successfully deployed on AWS EC2, configured with Nginx for efficient request handling. The frontend build was optimized using Vite and served through static hosting, ensuring fast performance and scalability.`,
    stack: [
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
        url: "https://www.google.com/search?q=javascript",
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        url: "https://www.google.com/search?q=node.js",
      },
      {
        name: "React",
        icon: <SiReact />,
        url: "https://www.google.com/search?q=react",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        url: "https://www.google.com/search?q=express.js",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        url: "https://www.google.com/search?q=mongodb",
      },
      {
        name: "Redux",
        icon: <SiRedux />,
        url: "https://www.google.com/search?q=redux",
      },
      {
        name: "DaisyUI",
        icon: <SiDaisyui />,
        url: "https://www.google.com/search?q=daisyui",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio />,
        url: "https://www.google.com/search?q=socket.io",
      },
    ],
  },

  {
    slug: "TodoApp",
    title: "TodoApp",
    background: "/images/Black.jpeg",
    previewImage: "/images/Todo.png",
    demoVideo: "/Videos/demo/Todo.mp4",
    githubUrl: "https://github.com/Sravan2808/Todo-Nextjs",
    websiteUrl: "https://todo-nextjs-three-gray.vercel.app/",
    description: `A modern, production-ready full-stack application built with Next.js (App Router) and React, designed for efficient task management with a scalable architecture.

Built a seamless CRUD system using Server Actions for secure and optimized backend operations
Implemented robust data handling with MongoDB and Mongoose
Designed responsive and accessible UI using Tailwind CSS and shadcn/ui
Integrated React Query for efficient server-state management, caching, and mutations
Implemented form validation using React Hook Form with schema-based validation (Zod/Yup)
Applied modular architecture with reusable components, custom hooks, and clean separation of concerns`,
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        url: "https://www.google.com/search?q=next.js",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        url: "https://www.google.com/search?q=tailwind+css",
      },
      {
        name: "ShadCN",
        icon: <SiShadcnui />,
        url: "https://www.google.com/search?q=shadcn",
      },
      {
        name: "Tanstack Query",
        icon: <SiReactquery />,
        url: "https://www.google.com/search?q=tanstack+query",
      },
      {
        name: "Zustand",
        icon: <SiFoodpanda />,
        url: "https://www.google.com/search?q=zustand",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        url: "https://www.google.com/search?q=mongodb",
      },
    ],
  },

  {
    slug: "Drizzle_Url_Shortner",
    title: "Drizzle URL Shortener",
    background: "/images/BrightBlue.jpeg",
    previewImage: "/images/url.png",
    demoVideo: null, // no demo video yet
    githubUrl: "https://github.com/Sravan2808/Drizzle_Url_Shortner",
    websiteUrl: "",
    description: `Built a secure and scalable URL Shortener API using Node.js and Express, designed to convert long URLs into compact, shareable links with efficient redirection. The application integrates PostgreSQL with Drizzle ORM for type-safe database operations and structured schema management. Implemented JWT-based authentication with bcrypt to ensure secure user registration and protected access to private routes. Authenticated users can create, view, and delete their own shortened URLs, enabling personalized link management. The project is containerized using Docker for consistent local development and tested using Postman to validate API functionality and reliability.`,
    stack: [
      {
        name: "Node.js",
        icon: <SiNodedotjs />,
        url: "https://www.google.com/search?q=node.js",
      },
      {
        name: "Express",
        icon: <SiExpress />,
        url: "https://www.google.com/search?q=express",
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql />,
        url: "https://www.google.com/search?q=postgresql",
      },
      {
        name: "Drizzle",
        icon: <SiDrizzle />,
        url: "https://www.google.com/search?q=drizzle",
      },
      {
        name: "Docker",
        icon: <SiDocker />,
        url: "https://www.google.com/search?q=docker",
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens />,
        url: "https://www.google.com/search?q=jwt",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        url: "https://www.google.com/search?q=postman",
      },
    ],
  },

  {
    slug: "Mojito-CockTails",
    title: "Mojito Cocktails",
    background: "/images/Darkgreen.jpeg",
    previewImage: "/images/MockTail.png",
    demoVideo: "/Videos/demo/Mojito.mp4", // no demo video yet
    githubUrl: "https://github.com/Sravan2808/Mojito-CockTails",
    websiteUrl: "https://mojito-cock-tails.vercel.app/",
    description: `Built a modern, animated single-page web application using React 19 and Vite, designed to showcase a cocktail bar experience with visually engaging sections. The application leverages Tailwind CSS for efficient, utility-first styling and integrates GSAP for smooth, high-performance animations that enhance user interaction. It features a well-structured component-based architecture, including sections like Navbar, Hero, About, Menu, Cocktails, Art gallery, and Contact, creating a seamless browsing experience. Additionally, react-responsive is used to ensure full responsiveness across devices, making the application visually appealing and accessible on all screen sizes.`,
    stack: [
      {
        name: "React",
        icon: <SiReact />,
        url: "https://www.google.com/search?q=react",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        url: "https://www.google.com/search?q=vite",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        url: "https://www.google.com/search?q=javascript",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        url: "https://www.google.com/search?q=tailwind css",
      },
      {
        name: "GSAP",
        icon: <SiGreensock />,
        url: "https://www.google.com/search?q=gsap",
      },
    ],
  },

  {
    slug: "obys-agency",
    title: "Obys Agency",
    background: "/images/Red.jpeg",
    previewImage: "/images/obys.png",
    demoVideo: "/Videos/demo/obys.mp4", // no demo video yet
    githubUrl: "https://github.com/Sravan2808/obys-agency",
    websiteUrl: "https://obys-agency-mocha-alpha.vercel.app/",
    description: `Developed an interactive and high-performance landing page for Obys Agency, focused on delivering a visually rich and immersive user experience. Implemented smooth scrolling using Locomotive Scroll and integrated GSAP to create dynamic text and image animations, enhancing overall UI/UX. The application is fully responsive across mobile and desktop devices, with performance optimizations such as lazy loading to ensure faster load times. A custom video player with advanced controls was added to provide seamless media interaction. Additionally, engaging features like interactive cursor effects, magnetic navigation elements, and a gooey effect on project visuals (desktop only) were incorporated to create a modern and captivating frontend experience.`,
    stack: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        url: "https://www.google.com/search?q=html5",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        url: "https://www.google.com/search?q=css3",
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
        url: "https://www.google.com/search?q=javascript",
      },
      {
        name: "GSAP",
        icon: <SiGreensock />,
        url: "https://greensock.com/gsap/",
      },
      {
        name: "Locomotive Scroll",
        icon: <RiJavascriptFill />,
        url: "https://locomotivemtl.github.io/locomotive-scroll/",
      },
      {
        name: "Shery.js",
        icon: <RiJavascriptFill />,
        url: "https://sheryjs.com/",
      },
      {
        name: "Three.js",
        icon: <SiThreedotjs />,
        url: "https://threejs.org/",
      },
    ],
  },

  {
    slug: "Productivity_DashBoard",
    title: "Productivity DashBoard",
    background: "/images/orange.jpeg",
    previewImage: "/images/Productive.png",
    demoVideo: "/Videos/demo/Productivity.mp4",
    githubUrl: "https://github.com/Sravan2808/Productivity_DashBoard",
    websiteUrl: "https://sravan2808.github.io/Productivity_DashBoard/",
    description: `Developed a single-page Productivity Dashboard web application that serves as a personal daily workspace with multiple integrated tools to enhance efficiency and planning. The application is built using HTML, CSS, and JavaScript, featuring a modular structure with interactive full-screen panels for tools like Todo List, Daily Planner, Motivation Quotes, Pomodoro Timer, and Daily Goals. It allows users to manage tasks and schedule hourly plans with localStorage persistence for a seamless experience. The dashboard also includes a Pomodoro timer with work and break sessions, live date and time updates, and real-time weather information fetched via an external API. Additionally, it supports dynamic theme switching and smooth UI interactions, making it a lightweight yet powerful client-side productivity solution.`,
    stack: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        url: "https://www.google.com/search?q=html5",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        url: "https://www.google.com/search?q=css3",
      },
      {
        name: "JavaScript",
        icon: <RiJavascriptFill />,
        url: "https://www.google.com/search?q=javascript",
      },
    ],
  },
];
