import MobileMenu from "../MobileMenu/MobileMenu";
import {
  Image,
  ImageStyled,
  LinkStyle,
  ListStyle,
  MainContainer,
} from "./Header.styled";

const Header = () => {
  return (
    <>
      <MainContainer>
        <ImageStyled>
          <a href="#contacts">
            <Image src="../../../public/gray_on_trans-removebg-preview.webp" />
          </a>
        </ImageStyled>

        <MobileMenu />
        <ListStyle>
          <li>
            <LinkStyle href="#about-me">About Me</LinkStyle>
          </li>

          <li>
            <LinkStyle href="#contacts">Projects</LinkStyle>
          </li>
          <li>
            <LinkStyle href="#contacts">Contacts</LinkStyle>
          </li>
        </ListStyle>
      </MainContainer>
    </>
  );
};

export default Header;
