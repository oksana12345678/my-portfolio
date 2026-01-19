import { useRef, useEffect, useState } from "react";
import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { CardsWrapper, SwiperItem } from "./ProjectsList.styled";
import {
  backendPB,
  cookingStorm,
  crm,
  farm,
  inHArmony,
  ItAcademy,
  movieFinder,
  my_portfolio,
  phoneBook,
  photo_graph,
  portfolio,
  RPG,
  travel,
  water,
  yachtJet,
} from "../../../assets/portfolio";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalWindow from "../../../shared/components/ModalWindow/ModalWindow";
import OpenProjectCard from "../ProjectsCard/components/OpenProjectCard/OpenProjectCard";

gsap.registerPlugin(ScrollTrigger);

const ProjectsList = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenId, setChosenId] = useState(null);

  const projectKeys = [
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
    "my_portfolio",
  ];

  const imageNames = [
    inHArmony,
    photo_graph,
    RPG,
    yachtJet,
    portfolio,
    movieFinder,
    water,
    travel,
    phoneBook,
    ItAcademy,
    farm,
    backendPB,
    cookingStorm,
    crm,
    my_portfolio,
  ];

  const handleClickToggle = (id) => {
    setIsOpen(!isOpen);
    setChosenId(id);
  };

  console.log(chosenId);

  const containerRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, projectKeys.length);

    cardsRef.current.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: i === cardsRef.current.length - 1 ? "bottom bottom" : "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [projectKeys.length]);

  return (
    <>
      <SwiperItem ref={containerRef}>
        {projectKeys.map((key, index) => {
          const project = t(key, { returnObjects: true });
          const image = imageNames[index];

          return (
            <CardsWrapper
              onClick={() => handleClickToggle(project.id)}
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card"
            >
              <ProjectsCard project={project} image={image} t={t} />
            </CardsWrapper>
          );
        })}
      </SwiperItem>
      <ModalWindow isOpen={isOpen} openToggle={handleClickToggle}>
        {projectKeys.map((key, index) => {
          const project = t(key, { returnObjects: true });
          if (project.id !== chosenId) return null;

          const image = imageNames[index];

          return (
            <OpenProjectCard key={key} project={project} image={image} t={t} />
          );
        })}
      </ModalWindow>
    </>
  );
};

export default ProjectsList;
