import { StyledLogo } from "./index.styles";
import logoSrc from '../../assets/images/Logo.png';
import { animateScroll } from "react-scroll";
import { StyledElement } from "./Element/index.styles";
import { routes } from "../../routes";

const Logo = () => {
  return (
    <StyledElement onClick={() => (animateScroll.scrollToTop())}>
      <StyledLogo to={routes.home.path} >
        <img src={logoSrc} alt="Логотип" />
      </StyledLogo>
    </StyledElement>
  )
}

export default Logo;