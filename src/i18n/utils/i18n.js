import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import i18nConfig from "../../i18nConfig";

export default async function initTranslations(
  locale,
  namespaces,
  existingInstance,
  resources
) {
  const i18nInstance = existingInstance || createInstance();

  const savedLang = localStorage.getItem("locale");
  const initialLocale = savedLang || locale || i18nConfig.defaultLocale;

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend((language, namespace) =>
        import(`../locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: initialLocale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    resources,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
    interpolation: { escapeValue: false },
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
