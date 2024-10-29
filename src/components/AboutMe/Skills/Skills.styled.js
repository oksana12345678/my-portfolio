import { IoArrowForwardOutline } from "react-icons/io5";
import styled from "styled-components";

export const SwiperWrapper = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    justify-content: flex-start;
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
      width: 120px;
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
    border: 1px solid var(--bg-button-color);
    border-radius: 100%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ $isHighlighted }) =>
      $isHighlighted ? "var(--accent-color)" : "transparent"};
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
    width: 40px;
    height: 40px;
    color: var(--bg-button-color);
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
