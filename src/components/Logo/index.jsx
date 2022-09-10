import { StyledLogo } from "./index.styles";
import logoSrc from '../../assets/images/Logo.png';
import { animateScroll } from "react-scroll";
import { StyledElement } from "./Element/index.styles";
import { routes } from "../../routes";
import { useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();

  const handler = () => {
    (location.pathname === '/') ? animateScroll.scrollToTop() : window.scrollTo(0,0);
  }

  return (
    <StyledElement onClick={handler}>
      <StyledLogo to={routes.home.path}>
        <img src={logoSrc} alt="Логотип" />
      </StyledLogo>
    </StyledElement>
  )
}

export default Logo;