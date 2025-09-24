import { useEffect, useState } from "react";
import {
  BurgerButton,
  DropdownMenu,
  MenuContainer,
  MenuItem,
} from "./MobileMenu.styled";
import { useTranslation } from "react-i18next";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation("header");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <MenuContainer>
      <BurgerButton
        onClick={toggleMenu}
        className={isOpen ? "open" : ""}
        role="button"
        aria-label="burger menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </BurgerButton>
      <DropdownMenu $isOpen={isOpen}>
        <li>
          <MenuItem href="#about-me" onClick={handleMenuItemClick}>
            {t("nav.about")}
          </MenuItem>
        </li>
        <li>
          <MenuItem href="#projects" onClick={handleMenuItemClick}>
            {t("nav.projects")}
          </MenuItem>
        </li>
        <li>
          <MenuItem href="#contacts" onClick={handleMenuItemClick}>
            {t("nav.contact")}
          </MenuItem>
        </li>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default MobileMenu;
