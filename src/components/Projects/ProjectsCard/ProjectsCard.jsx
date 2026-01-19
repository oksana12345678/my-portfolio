import {
  CardWrapper,
  ImageCardContainer,
  PortfolioCardImage,
  ProjectCardTitleWrapper,
} from "./ProjectsCard.styled";

const ProjectsCard = ({ project, image }) => {
  return (
    <CardWrapper>
      <ImageCardContainer>
        <PortfolioCardImage src={image} alt={project.name} />
        <ProjectCardTitleWrapper>
          <h3>{project.name}</h3>
        </ProjectCardTitleWrapper>
      </ImageCardContainer>
    </CardWrapper>
  );
};

export default ProjectsCard;
