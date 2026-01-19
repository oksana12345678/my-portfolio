import styled from "styled-components";

export const SwiperItem = styled.ul`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const CardsWrapper = styled.div`
  @media screen and (min-width: 320px) {
    height: 240px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: 100dvh;
  }
`;
