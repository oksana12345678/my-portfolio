import styled from "styled-components";

export const SectionStyled = styled.section`
  @media screen and (min-width: 320px) {
    padding: 40px 0;
    height: 400px;
    overflow: hidden;
  }
  @media screen and (min-width: 768px) {
    height: 899px;
  }
`;

export const MainContainerProjects = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 62px;
  }
`;

export const TitleProjects = styled.h2`
  font-weight: 600;
  font-size: 32px;
  opacity: 0.9;
  color: var(--grey-text-color);
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  text-align: center;
`;
