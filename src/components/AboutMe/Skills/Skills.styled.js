// import { IoArrowForwardOutline } from "react-icons/io5";
// import styled from "styled-components";

import styled from "styled-components";

// export const SwiperWrapper = styled.div`
//   @media screen and (min-width: 320px) {
//     display: flex;
//     justify-content: space-between;
//     padding: 0 16px;

//     .swiper {
//       width: 240px;
//       margin-left: 0;
//       margin-right: 0;
//     }
//     .swiper-wrapper {
//       display: flex;
//       align-items: flex-start;
//     }

//     .swiper-slide {
//       display: flex;
//       justify-content: center;
//     }
//   }

//   @media screen and (min-width: 768px) {
//     padding: 0 32px;
//     gap: 24px;

//     .swiper {
//       width: 600%;
//     }

//     .swiper-slide {
//       display: flex;
//       justify-content: center;
//       width: 200px;
//     }
//   }
// `;

// export const ContainerSliderItem = styled.div`
//   @media screen and (min-width: 320px) {
//     border: 1px solid var(--grey-secondary-color);
//     border-radius: 100%;
//     width: 120px;
//     height: 120px;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     background: ${({ $isHighlighted }) =>
//       $isHighlighted ? "var(--bg-button-color)" : "transparent"};
//     border: ${({ $isHighlighted }) =>
//       $isHighlighted ? "none" : "1px solid var(--grey-secondary-color)"};
//     color: ${({ $isHighlighted }) =>
//       $isHighlighted ? "var(--text-primary-color)" : "var(--light-text-color)"};

//     transition: background-color 0.3s ease;
//   }

//   @media screen and (min-width: 768px) {
//     width: 200px;
//     height: 200px;
//   }
// `;

// export const ButtonNext = styled.button`
//   background-color: transparent;
//   border: none;
// `;

// export const ArrowIconNext = styled(IoArrowForwardOutline)`
//   @media screen and (min-width: 320px) {
//     width: 38px;
//     height: 38px;
//     color: var(--grey-secondary-color);
//     transition: color 400ms ease-in-out;
//     cursor: pointer;

//     &:hover {
//       filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
//         drop-shadow(0 0 25px var(--accent-color-light-hover));
//     }
//   }

//   @media screen and (min-width: 768px) {
//     width: 60px;
//     height: 60px;
//   }
// `;

// export const SwiperSlideItem = styled.p`
//   @media screen and (min-width: 320px) {
//     text-overflow: ellipsis;
//     overflow: hidden;
//     text-align: center;
//     font-size: 20px;
//     font-weight: 500;
//     padding: 4px;
//   }

//   /* @media screen and (min-width: 768px) {
//   } */
// `;

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  will-change: transform;
  gap: 8px;
`;

export const SliderItem = styled.div`
  flex: 0 0 auto;
  padding: 8px;
  background: transparent;
  color: var(--hover-buttons-blu);

  border-radius: 8px;
  font-size: 1rem;
  text-align: center;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

export const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
