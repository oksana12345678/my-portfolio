import styled from "styled-components";

export const SectionStyled = styled.section`
  padding: 60px 0;
`;

export const MainContainerProjects = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const TitleProjects = styled.h2`
  font-weight: 600;
  font-size: 16px;
  color: var(--grey-text-color);
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;
