import { Field, Form } from "formik";
import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 16px;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;

export const FooterTitle = styled.h3`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-weight: 500;
    font-size: 32px;
    text-transform: uppercase;
  }
`;
export const FooterTitleSpan = styled.span`
  @media screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const FooterTitleSecondPart = styled.span`
  @media screen and (min-width: 320px) {
    color: var(--accent-color);
  }
`;

export const FooterTitleImg = styled.img`
  @media screen and (min-width: 320px) {
    width: 44px;
    height: 44px;
    border-radius: 100%;
    object-fit: fill;
  }
`;

export const FooterForm = styled(Form)`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
`;

export const StyledField = styled(Field)`
  padding: 12px;
  border: none;
  border-bottom: 1px solid var(--grey-secondary-color);
  font-size: 16px;
  background: transparent;
  width: 244px;
  height: 44px;
  resize: none;

  &:focus {
    border-color: var(--light-text-color);
    outline: none;
  }

  ${({ $isError }) =>
    $isError &&
    css`
      border-color: var(--error-color);
    `}

  ${({ $isValid }) =>
    $isValid &&
    css`
      border-color: var(--success-green-color);
    `}
`;

export const ErrorMessageStyle = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  @media screen and (min-width: 320px) {
    border: none;
    background: var(--bg-button-color);
    width: 100px;
    height: 100px;
    border-radius: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;
