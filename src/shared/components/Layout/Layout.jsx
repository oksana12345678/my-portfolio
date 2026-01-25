import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import BgAnimation from "../Animation/BgAnimation";
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
