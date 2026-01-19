import styled from "styled-components";

export const ContainerDesc = styled.div`
  @media screen and (min-width: 320px) {
    border-radius: 16px;
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* height: 100%; */
    justify-content: flex-start;
    color: var(--text-primary-color);
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 32px;
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
    align-items: center;
  }
`;

export const NameStyled = styled.h3`
  @media screen and (min-width: 320px) {
    font-weight: 600;
    font-size: 24px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 280px;
    font-size: 38px;
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
    margin: 6px auto;

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
    align-items: center;
    overflow: auto;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ListItemOfTechnology = styled.li`
  @media screen and (min-width: 320px) {
    background-color: var(--accent-color-light-hover);
    border-radius: 24px;
    padding: 10px;
    color: var(--text-primary-color);
  }

  @media screen and (min-width: 768px) {
  }
`;

export const LongDescContainer = styled.div`
  @media screen and (min-width: 320px) {
    min-width: 260px;
    text-align: start;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    height: 330px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    align-items: flex-start;

    flex-direction: row;
    gap: 24px;
  }
`;

export const PortfolioImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 50%;
    object-fit: contain;
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
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
  }

  @media screen and (min-width: 768px) {
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
  justify-content: center;
  width: 100%;
`;
