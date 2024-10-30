import {
  ContainerDesc,
  DescContainer,
  ImageContainer,
  LinksStyled,
  ListItemOfTechnology,
  ListOfTechnology,
  LongDescContainer,
  NameAndLink,
  NameStyled,
  PortfolioImage,
  TechnologyAndRepoContainer,
} from "./ProjectsCard.styled";

const ProjectsCard = ({ project }) => {
  const { KeyTechnologies } = project;
  return (
    <ContainerDesc>
      <ImageContainer>
        <PortfolioImage src={project.image} />
      </ImageContainer>
      <DescContainer>
        <TechnologyAndRepoContainer>
          <NameAndLink>
            <NameStyled>{project.name}</NameStyled>
            <LinksStyled href={project.webSite} target="blank">
              Visit web-site
            </LinksStyled>
          </NameAndLink>

          <p>
            Position:<span> {project.Position}</span>
          </p>
          <p>
            Team size: <span>{project.TeamSize}</span>
          </p>
        </TechnologyAndRepoContainer>
        <TechnologyAndRepoContainer>
          <NameAndLink>
            <p>Key technologies:</p>
            {project.ProjectRepository && (
              <LinksStyled href={project.ProjectRepository} target="blank">
                Project repository
              </LinksStyled>
            )}
          </NameAndLink>
          <ListOfTechnology>
            {KeyTechnologies.map((technology, index) => (
              <ListItemOfTechnology key={index}>
                <p>{technology}</p>
              </ListItemOfTechnology>
            ))}
          </ListOfTechnology>
        </TechnologyAndRepoContainer>

        <LongDescContainer>
          <p>{project.Responsibilities}</p>
        </LongDescContainer>
      </DescContainer>
    </ContainerDesc>
  );
};

export default ProjectsCard;
