import styled, { keyframes, css } from "styled-components";
// Keyframe animation for fading in
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

// Main section for the About Me component
export const AboutMeSection = styled.section`
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

// Main container for the About Me section with animation
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

// Container for the description with responsive layout
export const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 640px;
  }
`;

// Description container styling
export const DescContainerAboutMeLeft = styled.div`
  background: var(--bg-button-color);
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
  background: var(--bg-button-color);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation: ${slideInRight} 1s ease-in-out forwards;
      opacity: 1;
    `}

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

// Description text styling with animation
export const DescAboutMe = styled.div`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
  color: var(--text-primary-color);
  padding: 16px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    font-size: 28px;
  }
`;

// Image styling with animation
export const Image = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  height: 100%;

  @media screen and (min-width: 768px) {
  }
`;
