import { useEffect, useRef } from "react";
import {
  CardWrapper,
  ImageCardContainer,
  PortfolioCardImage,
  ProjectCardTitleWrapper,
} from "./ProjectsCard.styled";
import { SplitText } from "gsap/all";

const ProjectsCard = ({ project, image, titleRef, index, onClick }) => {
  const headingRef = useRef();

  useEffect(() => {
    if (!headingRef.current) return;

    document.fonts.ready.then(() => {
      const split = new SplitText(headingRef.current, {
        type: "chars,words,lines",
        linesClass: "clip-text",
      });

      titleRef.current[index] = split;
    });
  }, [titleRef, index]);

  return (
    <CardWrapper onClick={onClick}>
      <ImageCardContainer>
        <PortfolioCardImage src={image} alt={project.name} />
        <ProjectCardTitleWrapper>
          <h3 ref={headingRef}>{project.name}</h3>
        </ProjectCardTitleWrapper>
      </ImageCardContainer>
    </CardWrapper>
  );
};

export default ProjectsCard;
