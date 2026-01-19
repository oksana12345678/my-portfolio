import styled from "styled-components";
import {
  backBlurAnimation,
  flyToCenter,
  flyToCenterThree,
  flyToCenterTwo,
  logoAnimation,
  shooting,
  twinkle,
} from "./Animation";

const Square = styled.div`
  border-radius: 20%;
  position: absolute;
  --x: ${({ x }) => x}px;
  --y: ${({ y }) => y}px;
`;

export const WelcomeAnimationStyled = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${({ $showAnimation }) => ($showAnimation ? "block" : "none")};
`;

export const SecondaryWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 101;
`;

export const FirstCircle = styled(Square)`
  @media screen and (min-width: 320px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
    height: 500px;
  }
  background-color: var(--accent-color);
  z-index: 102;
  animation: ${flyToCenter} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

export const SecondCircle = styled(Square)`
  @media screen and (min-width: 320px) {
    width: 180px;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 450px;
  }
  background-color: var(--hover-buttons-blu);
  animation: ${flyToCenterTwo} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 102;
`;

export const ThirdCircle = styled(Square)`
  @media screen and (min-width: 320px) {
    width: 160px;
    height: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
  background-color: var(--accent-color);
  animation: ${flyToCenterThree} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 102;
`;

export const FourthCircle = styled(Square)`
  @media screen and (min-width: 320px) {
    width: 140px;
    height: 140px;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
  background-color: var(--hover-buttons-blu);
  animation: ${flyToCenterTwo} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 102;
`;

export const FifthCircle = styled(Square)`
  @media screen and (min-width: 320px) {
    width: 100px;
    height: 100px;
  }
  @media screen and (min-width: 768px) {
    width: 260px;
    height: 260px;
  }
  background-color: var(--accent-color);
  animation: ${flyToCenterThree} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 102;
`;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  animation: ${logoAnimation} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 102;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BackBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.1);
  animation: ${backBlurAnimation} 6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

///bg animation

export const BgAnimationStyled = styled.div`
  position: fixed;
  pointer-events: none;
  inset: 0;
  overflow: hidden;
  background: transparent;
  display: flex;
`;

export const Sky = styled.div`
  position: fixed;
  inset: 0;
  background: transparent;
  overflow: hidden;
  pointer-events: none;
`;

export const StaticStar = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: ${twinkle} 4s ease-in-out infinite;
`;

export const ShootingStar = styled.div`
  position: absolute;
  width: 65px;
  height: 0.5px;
  background: linear-gradient(white, transparent);
  box-shadow: 0px 0px 0.5px 0.5px white;
  border-radius: 50%;
  opacity: 0;
  animation: ${shooting} linear infinite;
`;
