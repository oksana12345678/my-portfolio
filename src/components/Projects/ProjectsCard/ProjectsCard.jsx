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

const ProjectsCard = ({ project, image, t }) => {
  const { KeyTechnologies } = project;

  return (
    <ContainerDesc>
      <ImageContainer>
        <PortfolioImage src={image} alt={project.name} />
      </ImageContainer>
      <DescContainer>
        <TechnologyAndRepoContainer>
          <NameAndLink>
            <NameStyled>{project.name}</NameStyled>
            <LinksStyled href={project.webSite} target="blank">
              {t("visit_button")}
            </LinksStyled>
          </NameAndLink>

          <p>
            {t("position")}: <span>{project.Position}</span>
          </p>
          <p>
            {t("team_size")}: <span>{project.TeamSize}</span>
          </p>
        </TechnologyAndRepoContainer>

        <TechnologyAndRepoContainer>
          <NameAndLink>
            <p>{t("key_technologies")}:</p>
            {project.ProjectRepository && (
              <LinksStyled href={project.ProjectRepository} target="blank">
                {t("project_repository")}
              </LinksStyled>
            )}
          </NameAndLink>
          <ListOfTechnology>
            {KeyTechnologies?.map((technology, index) => (
              <ListItemOfTechnology key={index}>
                <p>{technology}</p>
              </ListItemOfTechnology>
            ))}
          </ListOfTechnology>
        </TechnologyAndRepoContainer>

        <LongDescContainer>
          {project.Responsibilities?.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </LongDescContainer>
      </DescContainer>
    </ContainerDesc>
  );
};

export default ProjectsCard;
