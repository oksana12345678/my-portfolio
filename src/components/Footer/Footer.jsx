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
  StyledFieldContainer,
  SubmitButton,
} from "./Footer.styled";
import meSrc from "../../assets/fon.png";
import showToast from "../showToast";
import { useTranslation } from "react-i18next";
import SocialLinks from "../../shared/components/SocialLinks/SocialLinks";

const Footer = () => {
  const [formValues, setFormValues] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation("footer");

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

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...formValues,
      }).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setFormValues({ email: "", message: "" });
          showToast("Your message has been sent!", "success");
        } else {
          showToast("Form submission failed. Please try again.", "error");
        }
      })
      .catch((error) => {
        showToast(
          ` There was an error sending your message. Please try again later.  ${error}`,
          "error"
        );
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <FooterContainer id="contacts">
      <FooterTitle>
        <FooterTitleSpan>
          <FooterTitleImg src={meSrc} alt="Picture" />
          {t("first_word")}
          <FooterTitleSecondPart>{t("second_word")}</FooterTitleSecondPart>
        </FooterTitleSpan>
        {t("third_word")}
      </FooterTitle>
      <p>{t("contact")}</p>

      <FooterForm
        data-netlify="true"
        name="contact"
        method="post"
        onSubmit={handleSubmit}
        action="/"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you are human: <input name="bot-field" />
          </label>
        </p>

        <StyledFieldContainer>
          <div>
            <StyledField
              type="email"
              name="email"
              placeholder={t("enter_email")}
              onChange={handleChange}
              value={formValues.email}
              $isError={errors.email}
            />
            {errors.email && (
              <ErrorMessageStyle>{errors.email}</ErrorMessageStyle>
            )}
          </div>

          <div>
            <StyledField
              as="textarea"
              name="message"
              placeholder={t("enter_message")}
              onChange={handleChange}
              value={formValues.message}
              $isError={errors.message}
            />
            {errors.message && (
              <ErrorMessageStyle>{errors.message}</ErrorMessageStyle>
            )}
          </div>
        </StyledFieldContainer>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </SubmitButton>
      </FooterForm>
      <SocialLinks content="center" />
    </FooterContainer>
  );
};

export default Footer;
