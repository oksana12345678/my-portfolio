import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import styled from "styled-components";

export const SwiperItem = styled.div`
  @media screen and (min-width: 320px) {
    background: var(--bg-button-color);
    border-radius: 16px;
    min-width: 288px;
    margin: 0 auto;
    height: 642px;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    background: var(--bg-button-color);
    border-radius: 16px;
    min-width: 704px;
    height: 600px;
    margin: 0 auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
`;

export const ButtonPortfolio = styled.button`
  background-color: transparent;
  border: 1px solid var(--bg-button-color);
  border-radius: 100%;
  padding: 12px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.3s ease, color 0.3s ease;

  &:hover {
    border-color: var(--accent-color-light-hover);

    svg {
      color: var(--accent-color-light-hover);
      filter: drop-shadow(0 4px 15px var(--accent-color-light-hover))
        drop-shadow(0 0 25px var(--accent-color-light-hover));
    }
  }
`;

export const ButtonNextIcon = styled(TbArrowBigRightLines)`
  width: 28px;
  height: 28px;
  color: var(--bg-button-color);
  transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;
`;

export const ButtonPrevIcon = styled(TbArrowBigLeftLines)`
  width: 28px;
  height: 28px;
  color: var(--bg-button-color);
  transition: color 0.4s ease-in-out, filter 0.4s ease-in-out;
`;
