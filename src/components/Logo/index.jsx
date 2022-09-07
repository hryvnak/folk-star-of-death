import { StyledLogo } from "./index.styles";
import logoSrc from '../../assets/images/Logo.png';

const Logo = () => {
  return (
    <StyledLogo to="/">
      <img src={logoSrc} alt="Логотип" />
    </StyledLogo>
  )
}

export default Logo;