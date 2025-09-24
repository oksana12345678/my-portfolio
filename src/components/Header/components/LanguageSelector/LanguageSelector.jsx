import { useState } from "react";
import { LANGUAGES } from "../../../../shared/constants";
import Icon from "../../../../shared/components/Icon/Icon";
import {
  ChosenLang,
  LanguageContainer,
  LanguageListStyle,
  ListItemStyle,
} from "./LanguageSelector.styled";

const LanguageSelector = ({ handleLanguageSelect }) => {
  const [currentLang, setCurrentLang] = useState(LANGUAGES.PL);
  const [open, setOpen] = useState(false);

  const languageFlags = {
    ua: "ukraine",
    pl: "poland",
    en: "states",
  };

  const handleSelect = (lang) => {
    setCurrentLang(lang);
    handleLanguageSelect(lang);
    setOpen(false);
  };

  return (
    <LanguageContainer>
      <ChosenLang onClick={() => setOpen(!open)}>
        <Icon iconName={languageFlags[currentLang]} />
      </ChosenLang>

      {open && (
        <LanguageListStyle>
          {Object.entries(languageFlags)
            .filter(([key]) => key !== currentLang)
            .map(([key, flag]) => (
              <ListItemStyle key={key} onClick={() => handleSelect(key)}>
                <Icon iconName={flag} />
              </ListItemStyle>
            ))}
        </LanguageListStyle>
      )}
    </LanguageContainer>
  );
};

export default LanguageSelector;
