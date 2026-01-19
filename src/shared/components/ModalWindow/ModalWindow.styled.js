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
    background-color: black;
    display: flex;
    flex-direction: column;
    z-index: 1000;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    height: 90%;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;

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
