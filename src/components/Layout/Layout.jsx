import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FooterStyled, HeaderStyled, MainStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
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
