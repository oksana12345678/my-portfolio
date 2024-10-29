import Header from "../Header/Header";
import { HeaderStyled } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderStyled>
        <Header />
      </HeaderStyled>
      <main>{children}</main>
    </>
  );
};

export default Layout;
