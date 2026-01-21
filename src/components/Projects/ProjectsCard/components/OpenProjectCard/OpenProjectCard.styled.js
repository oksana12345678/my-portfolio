import styled from "styled-components";

export const ContainerDesc = styled.div`
  @media screen and (min-width: 320px) {
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* height: 100%; */
    justify-content: flex-start;
    color: var(--text-primary-color);
    max-width: 1440px;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const NameAndLink = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const NameStyled = styled.h3`
  @media screen and (min-width: 320px) {
    font-weight: 600;
    font-size: 16px;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
    max-width: 280px;
    font-size: 32px;
  }
`;

export const LinksStyled = styled.a`
  @media screen and (min-width: 320px) {
    color: var(--light-text-color);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    border-radius: 14px;
    transition: all 400ms ease-in-out;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 4px 15px var(--accent-color-light-hover);
    box-shadow:
      0 2px 12px var(--accent-color-light-hover),
      0 0 25px var(--accent-color-light-hover);
    width: 100%;
    max-width: 220px;
    margin: 6px 0;

    &:hover {
      box-shadow:
        0 6px 44px var(--accent-color-light-hover),
        0 0 25px var(--accent-color-light-hover);
      text-shadow: 0 4px 3px var(--accent-color-light-hover);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 14px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
  }
`;

export const ListOfTechnology = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: flex-start;
    overflow: auto;
    justify-content: flex-start;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ListItemOfTechnology = styled.li`
  @media screen and (min-width: 320px) {
    background-color: var(--accent-color-light-hover);
    border-radius: 24px;
    padding: 10px;
    color: var(--main-bg);
  }

  @media screen and (min-width: 768px) {
  }
`;

export const LongDescContainer = styled.div`
  @media screen and (min-width: 320px) {
    min-width: 260px;
    text-align: flex-start;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    height: max-content;
    padding-bottom: 12px;
    width: 100%;
    overflow: hidden;
    max-width: 800px;
    padding: 0 24px 16px 24px;
  }

  @media screen and (min-width: 768px) {
    max-width: 100%;
    flex-direction: row;
    padding: 0 62px;
  }
`;

export const PortfolioImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const DescContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    /* height: 550px; */
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    padding: 0 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 62px;
  }
`;

export const TechnologyAndRepoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
