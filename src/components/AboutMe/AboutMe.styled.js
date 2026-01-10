import styled, { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%); 
  }
  to {
    opacity: 1;
    transform: translateX(0); 
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%); 
  }
  to {
    opacity: 1;
    transform: translateX(0); 
  }
`;

export const AboutMeSection = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const MainContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 32px;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${fadeIn} 1s ease-in forwards;
      opacity: 1;
    `}

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 640px;
  }
`;

export const DescContainerAboutMeLeft = styled.div`
  background: var(--new-gradient-bottom);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInLeft} 1s ease-in-out forwards;
      opacity: 1;
    `}

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
export const DescContainerAboutMeRight = styled.div`
  background: var(--new-gradient-bottom);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 440px;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInRight} 1s ease-in-out forwards;
      opacity: 1;
    `}

  @media screen and (min-width: 768px) {
    width: 50%;
    height: 100%;
  }
`;

export const DescAboutMe = styled.div`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--light-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;

  @media screen and (min-width: 768px) {
    object-fit: contain;
  }
`;
