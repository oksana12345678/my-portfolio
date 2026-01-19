import { useEffect, useRef, useState } from "react";
import meSrc from "@/assets/oksana-tanashchuk.png";
import { TitleProjects } from "../Projects/Projects.styled";
import {
  AboutMeSection,
  ContainerAboutMe,
  DescAboutMe,
  DescContainerAboutMeLeft,
  DescContainerAboutMeRight,
  Image,
  MainContainerAboutMe,
} from "./AboutMe.styled";
import Skills from "./Skills/Skills";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const { t } = useTranslation("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 },
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <AboutMeSection id="about-me" ref={sectionRef}>
      <MainContainerAboutMe>
        <TitleProjects>{t("title")}</TitleProjects>
        <ContainerAboutMe>
          <DescContainerAboutMeLeft $isVisible={isVisible}>
            <DescAboutMe>{t("desc")}</DescAboutMe>
          </DescContainerAboutMeLeft>
          <DescContainerAboutMeRight $isVisible={isVisible}>
            <Image src={meSrc} alt="Frontend Developer" />
          </DescContainerAboutMeRight>
        </ContainerAboutMe>
      </MainContainerAboutMe>
      <Skills />
    </AboutMeSection>
  );
};

export default AboutMe;
