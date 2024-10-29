import { useState } from "react";
import {
  BurgerButton,
  DropdownMenu,
  MenuContainer,
  MenuItem,
} from "./MobileMenu.styled";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MenuContainer>
      <BurgerButton onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerButton>

      <DropdownMenu $isOpen={isOpen}>
        <li>
          <MenuItem href="#about-me">About Me</MenuItem>
        </li>
        <li>
          <MenuItem href="#projects">Projects</MenuItem>
        </li>
        <li>
          <MenuItem href="#contacts">Contacts</MenuItem>
        </li>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default MobileMenu;
