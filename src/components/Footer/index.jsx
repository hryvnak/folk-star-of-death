import Copyright from "./Copyright";
import { StyledFooter } from "./index.styles";
import FooterWrapper from "./Wrapper";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Copyright>
          Дизайн і фронтенд-розробка - 
          <a href="https://github.com/hryvnak/folk-star-of-death" rel="noreferrer" target="_blank">
            Гривнак&nbsp;Катерина<ImGithub />
          </a>
        </Copyright>
        <Copyright>© 2022</Copyright>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer;