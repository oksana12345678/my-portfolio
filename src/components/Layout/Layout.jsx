import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FooterStyled, HeaderStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <main>{children}</main>
      <FooterStyled>
        <Footer />
      </FooterStyled>
    </>
  );
};

export default Layout;
