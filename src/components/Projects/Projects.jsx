import { MainContainerProjects, SectionStyled } from "./Projects.styled";
import ProjectsList from "./ProjectsList/ProjectsList";

const Projects = () => {
  return (
    <SectionStyled>
      <MainContainerProjects>
        <ProjectsList />
      </MainContainerProjects>
    </SectionStyled>
  );
};

export default Projects;
