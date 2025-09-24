import { LANGUAGES, NAMESPACES } from "./shared/constants";

const i18nConfig = {
  locales: Object.values(LANGUAGES),
  defaultLocale: LANGUAGES.PL,
  prefixDefault: true,
  namespaces: NAMESPACES,
};

export default i18nConfig;
