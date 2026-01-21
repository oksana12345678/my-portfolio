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
  phoneBook,
  photo_graph,
  portfolio,
  RPG,
  travel,
  water,
  yachtJet,
} from "../../../assets/portfolio";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalWindow from "../../../shared/components/ModalWindow/ModalWindow";
import OpenProjectCard from "../ProjectsCard/components/OpenProjectCard/OpenProjectCard";
import { Observer } from "gsap/all";
import { PROJECTS_KEYS } from "../../../shared/constants";

gsap.registerPlugin(Observer);
const ProjectsList = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chosenId, setChosenId] = useState(null);
  const cardsRef = useRef([]);
  const indexRef = useRef(0);
  const animating = useRef(false);
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const observerRef = useRef(null);

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
  ];

  const handleClickToggle = (id) => {
    setIsOpen(!isOpen);
    setChosenId(id);
  };

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.set(cards, { autoAlpha: 0, yPercent: 100 });
    gsap.set(cards[0], { autoAlpha: 1, yPercent: 0 });

    const gotoCard = (index, direction) => {
      if (animating.current) return;

      if (indexRef.current === 0 && direction === -1) return;

      if (indexRef.current === cards.length - 1 && direction === 1) return;

      animating.current = true;
      const current = indexRef.current;
      // index = gsap.utils.wrap(0, cards.length, index);
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" },

        onComplete: () => {
          animating.current = false;
          indexRef.current = index;
        },
      });

      tl.to(cards[current], {
        yPercent: -100 * direction,
        autoAlpha: 0,
      })
        .fromTo(
          cards[index],
          { yPercent: 15 * direction, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1 },
          0,
        )
        .fromTo(
          titleRefs.current[index].chars,
          { autoAlpha: 0, yPercent: 150 * direction },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2,
        );
    };

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      tolerance: 10,
      target: sectionRef.current,
      preventDefault: true,

      onDown: (self) => {
        if (indexRef.current === 0) {
          self.disable();
          return;
        }
        gotoCard(indexRef.current - 1, -1);
      },

      onUp: (self) => {
        if (indexRef.current === cardsRef.current.length - 1) {
          self.disable();
          return;
        }
        gotoCard(indexRef.current + 1, 1);
      },
    });

    observerRef.current = observer;

    const section = sectionRef.current;

    const enableObserver = () => {
      observer.enable();
    };

    section.addEventListener("mouseenter", enableObserver);
    section.addEventListener("touchstart", enableObserver);

    return () => {
      section.removeEventListener("mouseenter", enableObserver);
      section.removeEventListener("touchstart", enableObserver);
      observer.kill();
    };
  }, []);

  return (
    <>
      <SwiperItem ref={sectionRef}>
        {PROJECTS_KEYS.map((key, i) => {
          const project = t(key, { returnObjects: true });
          const image = imageNames[i];

          return (
            <CardsWrapper
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card"
            >
              <ProjectsCard
                project={project}
                image={image}
                t={t}
                titleRef={titleRefs}
                index={i}
                onClick={() => handleClickToggle(project.id)}
              />
            </CardsWrapper>
          );
        })}
      </SwiperItem>
      <ModalWindow isOpen={isOpen} openToggle={handleClickToggle}>
        {PROJECTS_KEYS.map((key, index) => {
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
