import styled from "styled-components";

export const ContainerDesc = styled.div`
  @media screen and (min-width: 320px) {
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    justify-content: end;
    color: var(--text-primary-color);
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const NameAndLink = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NameStyled = styled.h3`
  @media screen and (min-width: 320px) {
    font-weight: 600;
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const LinksStyled = styled.a`
  @media screen and (min-width: 320px) {
    color: var(--light-text-color);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
    border: 1px solid var(--grey-text-color);
    border-radius: 16px;
    transition: all 400ms ease-in-out;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      box-shadow: 0 4px 15px var(--accent-color-light-hover),
        0 0 25px var(--accent-color-light-hover);
      text-shadow: 0 4px 15px var(--grey-text-color),
        0 0 25px var(--grey-text-color);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px;
  }
`;

export const ListOfTechnology = styled.ul`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    height: 96px;
    overflow: auto;
  }

  @media screen and (min-width: 768px) {
    height: 180px;
  }
`;

export const ListItemOfTechnology = styled.li`
  @media screen and (min-width: 320px) {
    background-color: var(--grey-text-color);
    border-radius: 24px;
    padding: 10px;
    color: var(--text-primary-color);
  }

  @media screen and (min-width: 768px) {
  }
`;

export const LongDescContainer = styled.div`
  @media screen and (min-width: 320px) {
    height: 90px;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
    height: 140px;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 320px) {
    height: 550px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const PortfolioImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: cover;
    border-radius: 16px;
    height: 164px;
  }

  @media screen and (min-width: 768px) {
    height: 550px;
  }
`;

export const DescContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 550px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const TechnologyAndRepoContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  @media screen and (min-width: 768px) {
  }
`;
