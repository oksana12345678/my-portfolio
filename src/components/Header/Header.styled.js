import styled from "styled-components";

export const MainContainer = styled.nav`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const ImageStyled = styled.div`
  @media screen and (min-width: 320px) {
    width: 60px;
    height: 60px;
    z-index: 110;
  }

  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Image = styled.img`
  @media screen and (min-width: 320px) {
    width: 60px;
    height: 60px;
  }
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const ListStyle = styled.ul`
  @media screen and (min-width: 320px) {
    display: none;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    z-index: 110;
  }
`;

export const LinkStyle = styled.a`
  font-weight: 500;
  font-size: 20px;
  color: var(--light-text-color);
  padding: 16px 12px;
  border-radius: 16px;
  text-shadow: 0 4px 15px var(--accent-color-light-hover);
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;

  &:hover {
    text-shadow: 2px 6px 3px var(--accent-color-light-hover);
  }
`;

export const LanguageSwitcherContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BgBlur = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    backdrop-filter: blur(4px);
    border-radius: 16px;
  }
`;

export const BurgerAndLanguageContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
