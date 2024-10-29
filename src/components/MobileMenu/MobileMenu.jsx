import { useEffect, useState } from "react";
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

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <MenuContainer>
      <BurgerButton onClick={toggleMenu} className={isOpen ? "open" : ""}>
        <div></div>
        <div></div>
        <div></div>
      </BurgerButton>

      <DropdownMenu $isOpen={isOpen}>
        <li>
          <MenuItem href="#about-me" onClick={handleMenuItemClick}>
            About Me
          </MenuItem>
        </li>
        <li>
          <MenuItem href="#projects" onClick={handleMenuItemClick}>
            Projects
          </MenuItem>
        </li>
        <li>
          <MenuItem href="#contacts" onClick={handleMenuItemClick}>
            Contacts
          </MenuItem>
        </li>
      </DropdownMenu>
    </MenuContainer>
  );
};

export default MobileMenu;
