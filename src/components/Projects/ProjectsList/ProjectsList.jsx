import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import {
  ButtonContainer,
  ButtonNextIcon,
  ButtonPortfolio,
  ButtonPrevIcon,
  SwiperItem,
} from "./ProjectsList.styled";
import {
  movieFinder,
  portfolio,
  travel,
  water,
  yachtJet,
} from "../../../assets/portfolio";

const ProjectsList = () => {
  const swiperRefTwo = useRef(null);

  const PROJECTS = [
    {
      image: yachtJet,
      name: "YachtJet Website",
      webSite: "https://oksana12345678.github.io/YachtJet-/",
      Position: "Team Lead, Developer",
      TeamSize: "11 Developers",
      ProjectRepository: "https://github.com/oksana12345678/YachtJet-",
      Responsibilities: `
Led a team of 11 developers in creating a website with 3 responsive breakpoints, ensuring an optimal user experience across devices.
Managed code control and maintained technical organization, providing solutions to complex technical challenges throughout the project.
Implemented JavaScript logic to meet functionality requirements as per the project specifications.
Collaborated closely with designers and stakeholders to ensure the website adhered strictly to the provided layout and specifications.
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
      image: portfolio,
      name: "Portfolio Website",
      webSite: "https://tina3008.github.io/project-group-3/",
      Position: "Developer",
      TeamSize: "10 Developers",
      ProjectRepository: "https://github.com/tina3008/project-group-3",
      Responsibilities: `
Developed a responsive section of the website, ensuring compatibility with 3 breakpoints for an optimal user experience across various devices.
Integrated front-end components with the back-end, ensuring smooth data flow and display of dynamic content.
Assisted team members in resolving technical issues during the development process, contributing to a more efficient workflow.
Ensured the section adhered to the given layout and specifications as per project requirements.
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
      name: "MovieFinder",
      webSite: "https://search-for-movies-and-view-description.vercel.app/",
      Position: "Developer",
      TeamSize: "Personal Project",
      ProjectRepository: "https://github.com/oksana12345678/MovieFinder",
      Responsibilities: `
MovieFinder is a web application that enables users to search for movies, view detailed descriptions, see the cast, and read reviews. The homepage features the most popular movies currently trending.
Features:
Movie Search: Find movies by title with detailed descriptions.
Cast & Reviews: View the cast list and user reviews for each movie.
Popular Movies: The homepage showcases the most popular movies at the moment.
Routing: Efficient navigation between pages using React Routes.`,
      KeyTechnologies: [
        "React.js",
        "React Routes",
        "JavaScript",
        "CSS (Styling)",
      ],
    },
    {
      image: water,
      name: "Tracker of Water",
      webSite: "https://stack-bridge.vercel.app/welcome",
      Position: "Team Lead",
      TeamSize: "13 Developers",
      ProjectRepository: "https://github.com/oksana12345678/StackBridge",
      Responsibilities: `
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
      name: "TravelTrucks",
      webSite: "https://travel-trucks-ten.vercel.app/",
      Position: "Developer",
      TeamSize: "Personal Project",
      ProjectRepository: "https://github.com/oksana12345678/TravelTrucks",
      Responsibilities: `TravelTrucks is a web application designed for travel enthusiasts, offering a selection of campers and travel vehicles with filtering options for features like sleeping capacity, amenities, and vehicle type. Users can explore options based on their preferences and access detailed information about each option.,
    - Developed dynamic search and filtering functionalities for campers by various features
    - Integrated RESTful APIs to fetch and display camper data in real time
    - Designed user-friendly navigation using React Routes for smooth page transitions
  `,
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
  ];

  return (
    <div>
      <Swiper
        onSwiper={(swiper) => (swiperRefTwo.current = swiper)}
        modules={[Navigation]}
        loop={true}
        slidesPerView={1}
      >
        {PROJECTS.map((project, index) => (
          <SwiperSlide key={index}>
            <SwiperItem>
              <ProjectsCard project={project} />
            </SwiperItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonContainer>
        <ButtonPortfolio onClick={() => swiperRefTwo.current?.slidePrev()}>
          <ButtonPrevIcon />
        </ButtonPortfolio>
        <ButtonPortfolio onClick={() => swiperRefTwo.current?.slideNext()}>
          <ButtonNextIcon />
        </ButtonPortfolio>
      </ButtonContainer>
    </div>
  );
};

export default ProjectsList;
