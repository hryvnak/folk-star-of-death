import { useState, useEffect } from "react";
import Logo from "../Logo";
import MainNav from "../MainNav";
import HeaderWrapper from "./Wrapper";
import { StyledHeader } from "./index.styles";
import { useLocation } from "react-router-dom";
import BurgerMenu from "../BurgerMenu";
import { StartTabletMini, TabletMini } from "../../media-queries";

const Header = () => {
  const location = useLocation();

  const [themeHeader, setThemeHeader] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY < 60 ? setThemeHeader("transparent") : setThemeHeader("light")
  } 

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', listenScrollEvent);
    }
  });

  return (
    <StyledHeader className={location.pathname === '/' ? themeHeader : "light"}>
      <HeaderWrapper>
        <Logo />
        <TabletMini>
          <BurgerMenu />
        </TabletMini>
        <StartTabletMini>
          <MainNav />
        </StartTabletMini>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header;