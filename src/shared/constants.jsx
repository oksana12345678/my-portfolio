import { AiFillApi } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { SiExpress, SiStyledcomponents } from "react-icons/si";
import StackIcon from "tech-stack-icons";
import {
  backendPB,
  cookingStorm,
  crm,
  farm,
  inHArmony,
  ItAcademy,
  movieFinder,
  phoneBook,
  photo_graph,
  portfolio,
  RPG,
  travel,
  water,
  yachtJet,
} from "../assets/portfolio/index";

export const LANGUAGES = { UA: "ua", EN: "en", PL: "pl" };

export const NAMESPACES = ["header", "hero", "footer", "about", "projects"];

export const SKILLS = [
  { name: "HTML", icon: <StackIcon name="html5" /> },
  { name: "CSS", icon: <StackIcon name="css3" /> },
  { name: "SCSS", icon: <StackIcon name="sass" /> },
  { name: "JavaScript", icon: <StackIcon name="js" /> },
  { name: "React", icon: <StackIcon name="preact" /> },
  { name: "Node.js", icon: <StackIcon name="nodejs" /> },
  { name: "React Router", icon: <StackIcon name="reactrouter" /> },
  { name: "Git", icon: <StackIcon name="git" /> },
  {
    name: "Express",
    icon: <SiExpress style={{ width: 100, height: 100 }} />,
  },
  { name: "Redux", icon: <StackIcon name="redux" /> },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents style={{ width: 100, height: 100 }} />,
  },
  { name: "TypeScript", icon: <StackIcon name="typescript" /> },
  { name: "Swagger", icon: <StackIcon name="swagger" /> },
  { name: "MongoDB", icon: <StackIcon name="mongodb" /> },
  { name: "Mongoose", icon: <StackIcon name="mongoose" /> },
  {
    name: "RESTful API",
    icon: <AiFillApi style={{ width: 100, height: 100 }} />,
  },
  { name: "Tailwind", icon: <StackIcon name="tailwindcss" /> },
  { name: "Next.js", icon: <StackIcon name="nextjs2" /> },
  {
    name: "Telegram Applications",
    icon: <FaTelegramPlane style={{ width: 100, height: 100 }} color="white" />,
  },
  { name: "Vite", icon: <StackIcon name="vitejs" /> },
];

export const PROJECTS = [
  {
    image: inHArmony,
    id: 1,
    name: "inHarmony",
    webSite: "https://inharmony.com.ua",
    Position: "Fullstack Developer",
    TeamSize: "9 Developers",
    Responsibilities: [
      "In Harmony – A Project for a Charity",

      "  In Harmony is a web project designed to support a charity dedicated to helping people in need. The platform was built with a focus on usability, performance, and modern web technologies to improve the experience for end users.",
      "My role: Fullstack Developer ",

      ` - Database integration: 
    Designed and implemented the back-end logic and ensured seamless interaction between the back-end and the database. This included configuring MongoDB, developing schemas, and handling CRUD operations using Mongoose and Next.js API routes.  
`,
      ` - Front-end development: 
    Designed the user interface (UI) using Next.js, creating responsive, dynamic, and accessible components. I also worked with Sass for styling and implemented i18next for multilingual support.  
`,
      ` - Fullstack features: 
    Integrated server-side logic and client-side functionality in a single monorepo to optimize server-side rendering (SSR), static site generation (SSG), and data caching using React Query.  
`,
      ` - File upload and media management: 
    Implemented file upload functionality using Multer and integrated Cloudinary for image storage, optimization, and delivery.  
`,
      `- Quality control: 
    Ensured clean, maintainable code by configuring ESLint, Prettier, and Husky hooks for automated linting and formatting.  
  `,
    ],
    KeyTechnologies: [
      "Next.js",
      "Sass",
      "MongoDB",
      "SSR",
      "i18n",
      "Multer",
      "Cloudinary",
      "Git for code control",
    ],
  },
  {
    image: photo_graph,
    id: 2,

    name: "Grapher Shot.",
    webSite: "https://photo-gallery-react-iota.vercel.app",
    Position: "Developer",
    TeamSize: "One Developer",
    Responsibilities: [
      `The Grapher Shot. is a personal portfolio website developed for a photographer. 
    The platform serves as a digital showcase of the photographer’s works, provides 
    information about services, and allows clients to book a photo session.`,
      `Key Features:
- Portfolio Showcase: A gallery where visitors can browse high-quality photos.
- About Section: Photographer’s biography and background.
- Pricing Page: Detailed price list for photography services.
- Booking System: Integrated calendar and forms for scheduling a photo session.
- Responsive Design: Optimized for mobile, tablet, and desktop devices.`,
    ],
    KeyTechnologies: [
      "React.js",
      "React Router",
      "Formik & Yup (Forms & Validation)",
      "React Calendar / Datepicker",
      "Axios",
      "Swiper",
      "CSS",
    ],
  },
  {
    image: RPG,
    id: 3,

    name: "IT Academy RPG web-site",
    webSite: "https://it-academy-rpg.vercel.app",
    Position: "Developer",
    TeamSize: "One Developer",
    Responsibilities: [
      `The IT Academy RPG Web-Site is a dynamic platform designed to present the IT Academy RPG project. Built with Next.js, the site leverages server-side rendering (SSR) to ensure fast load times and optimal performance.`,
      `The website features multi-language support (i18n), making it accessible to a broader audience. Styled with Tailwind CSS, it offers a modern and responsive user experience. Git is used for version control, ensuring efficient code management.`,
    ],
    KeyTechnologies: [
      "Next.js",
      "Tailwind",
      "SSR",
      "i18n",
      "Git for code control",
    ],
  },

  {
    image: yachtJet,
    id: 4,

    name: "YachtJet Website",
    webSite: "https://oksana12345678.github.io/YachtJet-",
    Position: "Team Lead, Developer",
    TeamSize: "11 Developers",
    ProjectRepository: "https://github.com/oksana12345678/YachtJet-",
    Responsibilities: [
      `
Led a team of 11 developers in creating a website with 3 responsive breakpoints, ensuring an optimal user experience across devices.
Managed code control and maintained technical organization, providing solutions to complex technical challenges throughout the project.
Implemented JavaScript logic to meet functionality requirements as per the project specifications.
Collaborated closely with designers and stakeholders to ensure the website adhered strictly to the provided layout and specifications.
`,
    ],
    KeyTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Collaboration Tools (e.g., Git for code control)",
    ],
  },
  {
    image: portfolio,
    id: 5,

    name: "Portfolio Website",
    webSite: "https://tina3008.github.io/project-group-3",
    Position: "Developer",
    TeamSize: "10 Developers",
    ProjectRepository: "https://github.com/tina3008/project-group-3",
    Responsibilities: `[
Developed a responsive section of the website, ensuring compatibility with 3 breakpoints for an optimal user experience across various devices.
Integrated front-end components with the back-end, ensuring smooth data flow and display of dynamic content.
Assisted team members in resolving technical issues during the development process, contributing to a more efficient workflow.
Ensured the section adhered to the given layout and specifications as per project requirements.]
`,
    KeyTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Collaboration Tools (e.g., Git for code control)",
    ],
  },

  {
    image: movieFinder,
    id: 6,

    name: "MovieFinder",
    webSite: "https://search-for-movies-and-view-description.vercel.app",
    Position: "Developer",
    TeamSize: "Personal Project",
    ProjectRepository: "https://github.com/oksana12345678/MovieFinder",
    Responsibilities: [
      `
MovieFinder is a web application that enables users to search for movies, view detailed descriptions, see the cast, and read reviews. The homepage features the most popular movies currently trending.
Features:
Movie Search: Find movies by title with detailed descriptions.
Cast & Reviews: View the cast list and user reviews for each movie.
Popular Movies: The homepage showcases the most popular movies at the moment.
Routing: Efficient navigation between pages using React Routes.`,
    ],
    KeyTechnologies: [
      "React.js",
      "React Routes",
      "JavaScript",
      "CSS (Styling)",
    ],
  },
  {
    image: water,
    id: 7,

    name: "Tracker of Water",
    webSite: "https://stack-bridge.vercel.app/welcome",
    Position: "Team Lead",
    TeamSize: "13 Developers",
    ProjectRepository: "https://github.com/oksana12345678/StackBridge",
    Responsibilities: [
      `
Tracker of Water is a responsive web application designed to help users monitor their daily water intake. Users can register, set daily water goals, and track their progress. The app also provides monthly statistics to give users a detailed overview of their hydration habits. It is built to function seamlessly across devices with three breakpoints: 320px, 768px, and 1440px.
Responsibilities:
Led a team of 13 developers, overseeing code control and technical organization.
Solved technical issues and ensured smooth project execution according to the provided layout and specifications.
Implemented the Redux Toolkit for state management and integrated the app with a RESTful API.
Features:
User Registration: Users can create accounts to personalize their water tracking.
Daily Water Tracking: Track how much water is consumed each day.
Monthly Statistics: View a detailed report of daily water intake over the course of a month.
Responsive Design: Optimized for all devices (mobile, tablet, desktop).
`,
    ],
    KeyTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "RESTful APIs",
      "React Routes",
    ],
  },
  {
    image: travel,
    id: 8,
    name: "TravelTrucks",
    webSite: "https://travel-trucks-ten.vercel.app",
    Position: "Developer",
    TeamSize: "Personal Project",
    ProjectRepository: "https://github.com/oksana12345678/TravelTrucks",
    Responsibilities: [
      `TravelTrucks is a web application designed for travel enthusiasts, offering a selection of campers and travel vehicles with filtering options for features like sleeping capacity, amenities, and vehicle type. Users can explore options based on their preferences and access detailed information about each option.,
    - Developed dynamic search and filtering functionalities for campers by various features
    - Integrated RESTful APIs to fetch and display camper data in real time
    - Designed user-friendly navigation using React Routes for smooth page transitions
  `,
    ],
    KeyTechnologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "RESTful APIs",
      "React Routes",
    ],
  },
  {
    image: phoneBook,
    id: 9,
    name: "Phone Book",
    webSite: "https://phone-book-kohl.vercel.app",
    Position: "Developer",
    TeamSize: "Personal Project",
    ProjectRepository: "https://github.com/oksana12345678/Phone-Book",
    Responsibilities: [
      `
       Phone Book Web Application
       The Phone Book is a user-friendly web application designed to manage personal or professional contacts efficiently. It allows users to perform essential contact management tasks, including:
       Adding Contacts: Save new contacts with details like name, phone number, and email.
       Editing Contacts: Update existing contact information to keep your phone book accurate and up-to-date.
       Deleting Contacts: Remove unnecessary contacts to maintain an organized list.
       Access and Security
       To ensure the privacy and security of your data:
       User Authentication: Logging in is mandatory to access the phone book.
       Account Protection: Only authorized users can view, edit, or manage contacts.
       Key Features
       Fully responsive design for seamless usage across devices.
       Intuitive and clean user interface for effortless navigation.
       Robust backend integration to securely store and retrieve your contact data.
       The Phone Book application is perfect for individuals and professionals seeking a reliable tool for managing their contacts in one secure and convenient place.
  `,
    ],
    KeyTechnologies: [
      "JavaScript",
      "React.js",
      "Redux Toolkit",
      "RESTful APIs",
      "React Routes",
    ],
  },
  {
    image: ItAcademy,
    id: 10,
    name: "IT Academy RPG (commercial)",
    webSite: "https://t.me/IAR_test_bot",
    Position: "Front-end Developer",
    TeamSize: "12 Developers",
    Responsibilities: [
      `The IT Academy Telegram app is a learning platform designed
        to teach programming and IT skills interactively. Combining educational content
        with gamified elements, it offers users a choice of career paths—such as
        frontend developer, backend developer, or designer—and provides quests, challenges,
         and quizzes tailored to each role. The app aims to engage users in skill-building
         exercises while keeping track of progress, awarding points, and offering badges.
          It is an ideal resource for both beginners and professionals looking to enhance
          their skills or pivot within the tech industry.
    `,
    ],
    KeyTechnologies: [
      "Tailwind",
      "RTK Query",
      "React.js",
      "Redux Toolkit",
      "React Routes",
      "TypeScript",
      "Telegram applications",
    ],
  },
  {
    image: farm,
    id: 11,
    name: "Farm Sort Puzzle (commercial)",
    webSite: "https://roksana-st.github.io/evoplay3",
    Position: "Front-end Developer",
    TeamSize: "2 Developers",
    ProjectRepository: "https://github.com/Roksana-St/evoplay3",
    Responsibilities: [`lending page for evoplay company`],
    KeyTechnologies: ["HTML", "SCSS", "Vite"],
  },

  {
    image: backendPB,
    id: 12,
    name: "Phone Book Backend",
    webSite: "https://validation-5dsv.onrender.com/api-docs",
    Position: "Backend Developer",
    TeamSize: "Developer",
    ProjectRepository: "https://github.com/oksana12345678/contactsBackendJS",
    Responsibilities: [
      `Development of a backend for the "Phone Book" web application, allowing users to register, 
      add, edit and delete contacts, and upload avatars. The system provides secure password storage,
       file processing, data validation, and integration with cloud services for working with images.`,
    ],
    KeyTechnologies: [
      "Node.js",
      "Express",
      "Swagger",
      "Cloudinary",
      "Crypto",
      "Joi",
      "Mongodb",
      "Mongoose",
      "Multer",
      "Bcrypt",
    ],
  },

  {
    image: cookingStorm,
    id: 13,
    name: "Cooking Storm (commercial)",
    webSite: "https://oksana12345678.github.io/evoplay_cooking_storm",
    Position: "Front-end Developer",
    TeamSize: "2 Developers",
    ProjectRepository:
      "https://github.com/oksana12345678/evoplay_cooking_storm",
    Responsibilities: [`lending page for evoplay company`],
    KeyTechnologies: ["HTML", "SCSS", "Vite"],
  },
  {
    image: crm,
    id: 14,
    name: "CRM",
    webSite: "https://crm-five-zeta.vercel.app/",
    Position: "Developer",
    TeamSize: "One Developer",
    ProjectRepository: "https://github.com/oksana12345678/crm",
    Responsibilities: [
      `The project is likely aimed at building a CRM (Customer Relationship Management) system using modern React-based tools with an emphasis on fast development and scalability.
Tech Stack:
React for the UI layer.
Next.js for SSR/SSG and API handling.
React Query for efficient data fetching.
Formik for form management.
Tailwind CSS for styling.
Focus: The project emphasizes developer productivity (via ESLint, Prettier, and TypeScript) and user experience (Headless UI and React Query).`,
    ],
    KeyTechnologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Formik",
      "React Query",
    ],
  },
];

export const PROJECTS_KEYS = [
  "inHarmony",
  "photo_graph",
  "RPG",
  "yachtJet",
  "portfolio",
  "movieFinder",
  "water",
  "travel",
  "phoneBook",
  "itAcademy",
  "farm",
  "backendPB",
  "cookingStorm",
  "crm",
];
