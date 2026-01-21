import styled from "styled-components";

export const MenuContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: var(--transition-base);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BurgerButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 100;

  div {
    width: 100%;
    height: 4px;
    background: var(--text-primary-color);
    border-radius: 2px;
    transition: var(--transition-base);
  }

  &.open {
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }

    div:nth-child(2) {
      opacity: 0;
    }

    div:nth-child(3) {
      transform: rotate(-50deg) translate(10px, -8px);
    }
  }
`;

export const DropdownMenu = styled.ul`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -4%);
  backdrop-filter: blur(15px);
  width: 100vw;
  height: 100dvh;
  border-radius: 10px;
  padding: 10px 20px;
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  gap: 20px;
  justify-content: center;
  transition: var(--transition-base);
`;

export const MenuItem = styled.a`
  display: flex;
  font-weight: 400;
  font-size: 20px;
  color: var(--light-text-color);
  padding: 16px 12px;
  border-radius: 16px;
  text-shadow: 0 4px 15px var(--accent-color-light-hover);
  align-items: center;
  justify-content: center;
  transition: all 400ms ease-in-out;
  text-transform: capitalize;

  &:hover {
    box-shadow:
      0 4px 15px var(--accent-color-light-hover),
      0 0 25px var(--accent-color-light-hover);
    text-shadow: 2px 6px 3px var(--accent-color-light-hover);
  }
`;
