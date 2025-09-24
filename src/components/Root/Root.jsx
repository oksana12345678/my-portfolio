
import { useEffect, useState } from "react";
import { NAMESPACES } from "../../shared/constants";
import initTranslations from "../../i18n/utils/i18n";
import i18nConfig from "../../i18nConfig";
import TranslationsProvider from "../../i18n/utils/TranslationsProvider";

function Root({ children }) {
  const [i18nData, setI18nData] = useState(null);

  useEffect(() => {
    const loadTranslations = async () => {
      const localeFromUrl = getLocaleFromUrl() ?? i18nConfig.defaultLocale;
      try {
        const { resources } = await initTranslations(localeFromUrl, NAMESPACES);
        setI18nData({ locale: localeFromUrl, resources });
      } catch (err) {
        console.error("Error loading translations:", err);
      }
    };
    loadTranslations();
  }, []);

  if (!i18nData) return <div>Loading translations...</div>;

  return (
    <TranslationsProvider
      namespaces={NAMESPACES}
      locale={i18nData.locale}
      resources={i18nData.resources}
    >
      {children}
    </TranslationsProvider>
  );
}

function getLocaleFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("lang");
}

export default Root;
