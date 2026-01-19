import {
  ContainerDesc,
  ContainerWrapper,
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
} from "./OpenProjectCard.styled";

const OpenProjectCard = ({ project, image, t }) => {
  const { KeyTechnologies } = project;

  return (
    <ContainerDesc>
      <ImageContainer>
        <PortfolioImage src={image} alt={project.name} />
        <TechnologyAndRepoContainer>
          <NameAndLink>
            <NameStyled>{project.name}</NameStyled>
            <LinksStyled href={project.webSite} target="blank">
              {t("visit_button")}
            </LinksStyled>
          </NameAndLink>
          <ContainerWrapper>
            <h4>{t("position")}</h4> : <p>{project.Position}</p>
          </ContainerWrapper>
          <ContainerWrapper>
            <h4>{t("team_size")}</h4> : <p>{project.TeamSize}</p>
          </ContainerWrapper>
          {project.ProjectRepository && (
            <LinksStyled href={project.ProjectRepository} target="blank">
              {t("project_repository")}
            </LinksStyled>
          )}
        </TechnologyAndRepoContainer>
      </ImageContainer>
      <DescContainer>
        <TechnologyAndRepoContainer>
          <NameAndLink>
            <h4>{t("key_technologies")}:</h4>
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

export default OpenProjectCard;
