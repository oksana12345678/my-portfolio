import BgAnimation from "../../shared/components/Animation/BgAnimation";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FooterStyled, HeaderStyled, MainStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <BgAnimation />
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <MainStyled>{children}</MainStyled>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </>
  );
};

export default Layout;
