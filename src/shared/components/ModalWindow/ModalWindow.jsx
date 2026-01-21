import { useEffect } from "react";
import {
  ButtonContainer,
  CloseButton,
  ModalContainer,
} from "./ModalWindow.styled";

const ModalWindow = ({ children, isOpen, openToggle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ButtonContainer>
            <CloseButton onClick={openToggle}>
              <div></div>

              <div></div>
            </CloseButton>
            {children}
          </ButtonContainer>
        </ModalContainer>
      )}
    </>
  );
};

export default ModalWindow;
