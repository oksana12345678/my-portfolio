// src/hooks/useLanguageChanger.js
import { useTranslation } from "react-i18next";

export default function useLanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleChangeLanguage = (newLocale) => {
    i18n.changeLanguage(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return { currentLocale, handleChangeLanguage };
}
