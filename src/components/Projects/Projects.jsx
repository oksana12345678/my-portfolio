import {
  MainContainerProjects,
  SectionStyled,
  TitleProjects,
} from "./Projects.styled";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = () => {
  return (
    <SectionStyled id="projects">
      <MainContainerProjects>
        <TitleProjects>Projects</TitleProjects>
        <ProjectsList />
      </MainContainerProjects>
    </SectionStyled>
  );
};

export default Projects;
