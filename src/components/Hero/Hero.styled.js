import styled from "styled-components";
import bgImage from "../../assets/Lovepik_com-500371101-colorful-dazzling-banner.webp";
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
    width: 100%;
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
    font-size: 30px;
    color: var(--text-primary-color);
    display: flex;
    flex-direction: column;
    text-align: start;
    align-items: flex-start;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
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
    color: var(--text-primary-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;

    &:hover {
      color: var(--accent-color-light-hover);
      filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
        drop-shadow(0 0 25px var(--accent-color-light-hover));
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconsGit = styled(VscGithubAlt)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--text-primary-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;

    &:hover {
      color: var(--accent-color-light-hover);
      filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
        drop-shadow(0 0 25px var(--accent-color-light-hover));
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const IconsTelegram = styled(PiTelegramLogoLight)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--text-primary-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;

    &:hover {
      color: var(--accent-color-light-hover);
      filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
        drop-shadow(0 0 25px var(--accent-color-light-hover));
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
