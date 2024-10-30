import styled from "styled-components";

export const MainContainer = styled.nav`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;
export const ImageStyled = styled.div`
  width: 100px;
  height: 100px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const ListStyle = styled.ul`
  @media screen and (min-width: 320px) {
    display: none;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LinkStyle = styled.a`
  font-weight: 400;
  font-size: 20px;
  color: var(--light-text-color);
  padding: 16px 12px;
  border-radius: 16px;
  background: var(--accent-color);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 15px var(--accent-color-light-hover),
      0 0 25px var(--accent-color-light-hover);
  }
`;
