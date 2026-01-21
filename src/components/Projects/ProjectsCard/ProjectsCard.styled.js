import styled from "styled-components";

export const CardWrapper = styled.div`
  @media screen and (min-width: 320px) {
    height: 100%;
    color: var(--text-primary-color);
    width: 100%;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ImageCardContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const PortfolioCardImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: contain;
    height: max-content;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ProjectCardTitleWrapper = styled.div`
  @media screen and (min-width: 320px) {
    position: absolute;
    top: 0;
    height: 60px;
    width: 100%;
    background: var(--bg-color-accent);
    padding-left: 16px;

    h3 {
      @media screen and (min-width: 320px) {
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--grey-text-color);
        width: 100%;
        height: 120px;
      }

      @media screen and (min-width: 768px) {
        font-size: 32px;
        font-weight: 600;
      }

      @media screen and (min-width: 1024px) {
        font-size: 52px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    height: 80px;
  }

  @media screen and (min-width: 1024px) {
    height: 116px;
  }
`;
