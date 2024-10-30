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
  const [formValues, setFormValues] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formValues.email) {
      newErrors.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formValues.message.trim()) {
      newErrors.message = "Required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    console.log(formValues);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formValues).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setFormValues({ email: "", message: "" });
          alert("Your message has been sent!");
        } else {
          alert("Form submission failed. Please try again.");
        }
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
          <FooterTitleImg src={meSrc} alt="My Picture" />
          Let’s work
        </FooterTitleSpan>
        <FooterTitleSecondPart>together</FooterTitleSecondPart>
      </FooterTitle>
      <p>Contact me</p>

      <FooterForm
        data-netlify="true"
        name="contact"
        method="POST"
        onSubmit={handleSubmit}
        action="#"
      >
        <input type="hidden" name="form-name" value="contact" />

        <StyledField
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formValues.email}
          $isError={errors.email}
        />
        {errors.email && <ErrorMessageStyle>{errors.email}</ErrorMessageStyle>}

        <StyledField
          as="textarea"
          name="message"
          placeholder="Enter your message"
          onChange={handleChange}
          value={formValues.message}
          $isError={errors.message}
        />
        {errors.message && (
          <ErrorMessageStyle>{errors.message}</ErrorMessageStyle>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </SubmitButton>
      </FooterForm>
    </FooterContainer>
  );
};

export default Footer;
