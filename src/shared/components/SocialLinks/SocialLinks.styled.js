import { PiTelegramLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import styled from "styled-components";

export const SocialMedia = styled.div`
  @media screen and (min-width: 320px) {
    color: var(--text-primary-color);
    width: 100%;
  }
`;

export const SocialMediaList = styled.ul`
  @media screen and (min-width: 320px) {
    align-items: ${({ item }) => item || "flex-start"};
    justify-content: ${({ content }) => content || "flex-start"};

    display: flex;
    gap: 24px;
  }
`;

export const Icons = styled(SlSocialLinkedin)`
  @media screen and (min-width: 320px) {
    width: 26px;
    height: 26px;
    color: var(--light-text-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;
    filter: drop-shadow(0 4px 15px var(--error-color))
      drop-shadow(0 0 3px var(--error-color));

    &:hover {
      /* color: var(--accent-color-light-hover); */

      filter: drop-shadow(2px 4px 10px var(--error-color))
        drop-shadow(0 0 24px var(--error-color));
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
    color: var(--light-text-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;
    filter: drop-shadow(0 4px 15px var(--error-color))
      drop-shadow(0 0 3px var(--error-color));

    &:hover {
      /* color: var(--accent-color-light-hover); */

      filter: drop-shadow(2px 4px 10px var(--error-color))
        drop-shadow(0 0 24px var(--error-color));
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
    color: var(--light-text-color);
    transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;

    filter: drop-shadow(0 4px 15px var(--error-color))
      drop-shadow(0 0 3px var(--error-color));

    &:hover {
      /* color: var(--accent-color-light-hover); */

      filter: drop-shadow(2px 4px 10px var(--error-color))
        drop-shadow(0 0 24px var(--error-color));
    }
  }

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
