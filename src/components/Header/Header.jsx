import MobileMenu from "../MobileMenu/MobileMenu";
import {
  Image,
  ImageStyled,
  LinkStyle,
  ListStyle,
  MainContainer,
} from "./Header.styled";

import logo from "/logo.webp";

const Header = () => {
  return (
    <>
      <MainContainer>
        <ImageStyled>
          <a href="#contacts">
            <Image src={logo} />
          </a>
        </ImageStyled>

        <MobileMenu />
        <ListStyle>
          <li>
            <LinkStyle href="#about-me">About Me</LinkStyle>
          </li>

          <li>
            <LinkStyle href="#projects">Projects</LinkStyle>
          </li>
          <li>
            <LinkStyle href="#contacts">Contact Me</LinkStyle>
          </li>
        </ListStyle>
      </MainContainer>
    </>
  );
};

export default Header;
