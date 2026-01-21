import styled from "styled-components";

export const ModalContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    overflow: scroll;
    background: var(--new-gradient);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    padding: 62px 0;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    width: 1160px;
    height: 80%;
  }
`;

export const CloseButton = styled.button`
  /* align-self: flex-end; */
  right: 8px;
  top: 24px;
  position: fixed;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 1001;

  div {
    width: 24px;
    height: 2px;
    background-color: white;
    transition: 0.3s;
  }

  div:first-child {
    transform: rotate(45deg) translate(3px, 3px);
  }

  div:last-child {
    transform: rotate(-45deg) translate(3px, -3px);
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;

    z-index: 1000;
  }

  @media screen and (min-width: 768px) {
  }
`;
