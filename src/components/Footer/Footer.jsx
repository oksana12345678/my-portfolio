import { ErrorMessage, Formik } from "formik";
import { useState } from "react";
import {
  ErrorMessageStyle,
  FooterContainer,
  FooterForm,
  FooterTitle,
  FooterTitleImg,
  FooterTitleSecondPart,
  FooterTitleSpan,
  StyledField,
  SubmitButton,
} from "./Footer.styled";

import meSrc from "../../assets/front.png";

const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: "",
    message: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.message || !values.message.trim()) {
      errors.message = "Required";
    }
    return errors;
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(values).toString(),
    })
      .then(() => {
        resetForm(); // Виклик функції
        alert("Your message has been sent!");
      })
      .catch((error) => {
        console.error("Sending form failed", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <FooterContainer id="contacts">
      <FooterTitle>
        <FooterTitleSpan>
          <FooterTitleImg src={meSrc} />
          Let’s work
        </FooterTitleSpan>
        <FooterTitleSecondPart>together</FooterTitleSecondPart>
      </FooterTitle>
      <p>Contact me</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ errors, touched, handleChange, values }) => (
          <FooterForm data-netlify="true" name="contact" method="POST">
            <StyledField
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={values.email}
              $isError={errors.email && touched.email}
              $isValid={!errors.email && touched.email}
            />
            <ErrorMessage name="email">
              {(msg) => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            </ErrorMessage>
            <input type="hidden" name="form-name" value="contact" />

            <StyledField
              as="textarea"
              name="message"
              placeholder="Enter your message"
              onChange={handleChange}
              value={values.message}
              $isError={errors.message && touched.message}
              $isValid={!errors.message && touched.message}
            />
            <ErrorMessage name="message">
              {(msg) => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            </ErrorMessage>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </SubmitButton>
          </FooterForm>
        )}
      </Formik>
    </FooterContainer>
  );
};

export default Footer;
