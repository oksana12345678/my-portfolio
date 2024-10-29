import styled from "styled-components";

export const ContainerDesc = styled.div`
  @media screen and (min-width: 320px) {
    border: 1px solid var(--text-primary-color);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    justify-content: end;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NameAndLink = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
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
    color: var(--accent-color);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 768px) {
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
    height: 140px;
    overflow: scroll;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 50%;
    height: 550px;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const PortfolioImage = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    object-fit: cover;
    height: 550px;
    border-radius: 16px;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const DescContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 50%;
    height: 550px;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
  }
`;
