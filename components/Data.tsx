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
} from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaMedium,
  FaJava,
  FaAws,
  FaDatabase,
  FaInstagram,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";

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
    icon: <FaDatabase />,
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
];

export const projects = [
  {
    title: "DevTinder",
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
    ],
  },
];
