import styled from "styled-components";
import bgImage from "../../assets/polygonal18.jpg";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTelegramLogoLight } from "react-icons/pi";

export const HeroBG = styled.section`
  @media screen and (min-width: 320px) {
    background-image: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh - 10px);
    width: 100%;
    display: flex;
    padding: 90px 0 80px 0;
  }

  @media screen and (min-width: 768px) {
    height: 650px;
  }

  @media screen and (min-width: 1440px) {
    height: 780px;
  }
`;
export const MainHeroContainer = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    gap: 120px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 40px;
  }
`;

export const Title = styled.h1`
  @media screen and (min-width: 320px) {
    font-weight: 500;
    font-size: 32px;
    color: var(--text-primary-color);
  }

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 45px;
  }

  @media screen and (min-width: 1440px) {
    font-weight: 500;
    font-size: 90px;
  }
`;

export const SocialMedia = styled.div`
  @media screen and (min-width: 320px) {
    color: var(--text-primary-color);
  }
`;

export const SocialMediaList = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    gap: 24px;
  }
`;

export const Icons = styled(SlSocialLinkedin)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--bg-button-color);
    transition: color 0.5s ease-in-out;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    color: var(--bg-button-color);
  }
`;

export const IconsGit = styled(VscGithubAlt)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--bg-button-color);
    transition: color 0.5s ease-in-out;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    color: var(--bg-button-color);
  }
`;

export const IconsTelegram = styled(PiTelegramLogoLight)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--bg-button-color);
    transition: color 0.5s ease-in-out;

    &:hover {
      color: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    color: var(--bg-button-color);
  }
`;
