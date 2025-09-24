import { useTranslation } from "react-i18next";
import {
  MainContainerProjects,
  SectionStyled,
  TitleProjects,
} from "./Projects.styled";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = () => {
  const { t } = useTranslation("projects");

  return (
    <SectionStyled id="projects">
      <MainContainerProjects>
        <TitleProjects>{t("title")}</TitleProjects>
        <ProjectsList t={t} />
      </MainContainerProjects>
    </SectionStyled>
  );
};

export default Projects;
