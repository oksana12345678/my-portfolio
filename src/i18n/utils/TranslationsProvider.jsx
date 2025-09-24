"use client";

import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import initTranslations from "./i18n";

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const i18nInstance = createInstance();

  void initTranslations(locale, namespaces, i18nInstance, resources);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
