import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 10px 0;
  background-color: transparent;
  position: absolute;
  top: 10px;
  width: 100%;
  right: 50%;
  transform: translate(50%, 0);
  z-index: 100;
  @media screen and (min-width: 320px) {
    max-width: 1440px;
  }
`;

export const FooterStyled = styled.footer`
  padding: 80px 0;
  padding-bottom: 120px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 1440px;
  }
`;

export const MainStyled = styled.main`
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 1440px;
  }
`;
