import styled from "styled-components";
import meSrc from "../../assets/fon.png";

export const HeroBG = styled.section`
  @media screen and (min-width: 320px) {
    /* background: url(${meSrc});
    background-repeat: no-repeat;
    background-position: right top 0px;
    background-size: contain; */
    height: calc(100dvh - 10px);
    max-height: 1000px;
    width: 100%;
    display: flex;
    padding: 80px 0 80px 0;

    /* &::after {
      content: "";
      position: absolute;
      inset: 0;
      max-height: 1000px;
      background: rgba(0, 0, 0, 0.2);
    } */
  }

  @media screen and (min-width: 768px) {
    height: calc(100dvh - 10px);
    background-position: right top -110px;
    background-size: 600px;
  }

  @media screen and (min-width: 1024px) {
    background-position: right bottom 40px;
    background-size: contain;
  }
`;

export const MainHeroContainer = styled.div`
  @media screen and (min-width: 320px) {
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 60px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: var(--grey-text-color);

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
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
    color: var(--light-text-color);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
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
