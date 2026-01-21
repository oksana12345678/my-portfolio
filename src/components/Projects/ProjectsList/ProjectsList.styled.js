import styled from "styled-components";

export const SwiperItem = styled.ul`
  @media screen and (min-width: 320px) {
    position: relative;
    width: 100%;
    height: 50%;
  }
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const CardsWrapper = styled.li`
  @media screen and (min-width: 320px) {
    position: absolute;
    height: 240px;
    inset: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    height: max-content;
  }
`;
