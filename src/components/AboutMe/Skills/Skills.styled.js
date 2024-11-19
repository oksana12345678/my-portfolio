import { IoArrowForwardOutline } from "react-icons/io5";
import styled from "styled-components";

export const SwiperWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;

    .swiper {
      width: 240px;
      margin-left: 0;
      margin-right: 0;
    }
    .swiper-wrapper {
      display: flex;
      align-items: flex-start;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    gap: 24px;

    .swiper {
      width: 600%;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      width: 200px;
    }
  }
`;

export const ContainerSliderItem = styled.div`
  @media screen and (min-width: 320px) {
    border: 1px solid var(--grey-secondary-color);
    border-radius: 100%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ $isHighlighted }) =>
      $isHighlighted ? "var(--bg-button-color)" : "transparent"};
    border: ${({ $isHighlighted }) =>
      $isHighlighted ? "none" : "1px solid var(--grey-secondary-color)"};
    color: ${({ $isHighlighted }) =>
      $isHighlighted ? "var(--text-primary-color)" : "var(--light-text-color)"};

    transition: background-color 0.3s ease;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const ButtonNext = styled.button`
  background-color: transparent;
  border: none;
`;

export const ArrowIconNext = styled(IoArrowForwardOutline)`
  @media screen and (min-width: 320px) {
    width: 38px;
    height: 38px;
    color: var(--grey-secondary-color);
    transition: color 400ms ease-in-out;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
        drop-shadow(0 0 25px var(--accent-color-light-hover));
    }
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const SwiperSlideItem = styled.p`
  @media screen and (min-width: 320px) {
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    padding: 4px;
  }

  /* @media screen and (min-width: 768px) {
  } */
`;
