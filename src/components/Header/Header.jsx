import MobileMenu from "../MobileMenu/MobileMenu";
import {
  Image,
  ImageStyled,
  LinkStyle,
  ListStyle,
  MainContainer,
} from "./Header.styled";

import logo from "/logo.png";

import useLanguageChanger from "../../i18n/utils/LanguageChanger";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

const Header = () => {
  const { t } = useTranslation("header");

  const { handleChangeLanguage } = useLanguageChanger();
  const handleLanguageSelect = (newLocale) => {
    handleChangeLanguage(newLocale);
  };

  return (
    <>
      <MainContainer>
        <ImageStyled>
          <a href="#contacts">
            <Image src={logo} />
          </a>
        </ImageStyled>
        <LanguageSelector handleLanguageSelect={handleLanguageSelect} />

        <MobileMenu />
        <ListStyle>
          <li>
            <LinkStyle href="#about-me">{t("nav.about")}</LinkStyle>
          </li>

          <li>
            <LinkStyle href="#projects">{t("nav.projects")}</LinkStyle>
          </li>
          <li>
            <LinkStyle href="#contacts">{t("nav.contact")}</LinkStyle>
          </li>
        </ListStyle>
      </MainContainer>
    </>
  );
};

export default Header;
