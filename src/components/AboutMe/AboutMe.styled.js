import styled from "styled-components";

export const AboutMeSection = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const MainContainerAboutMe = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 32px;
    height: 600px;
  }
`;

export const DescContainerAboutMe = styled.div`
  @media screen and (min-width: 320px) {
    background-color: var(--bg-button-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const DescAboutMe = styled.div`
  @media screen and (min-width: 320px) {
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    color: var(--grey-text-color);
    padding: 16px 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 32px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 16px;
  max-height: 600px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    height: 600px;
  }
`;
