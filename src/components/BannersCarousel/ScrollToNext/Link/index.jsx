import PropTypes from 'prop-types';
import { StyledLink } from "./index.styles";
import { ImArrowDown2 } from "react-icons/im";

const Link = (props) => {
  const { activeClass, to, spy, smooth, offset, duration } = props;
  return (
    <StyledLink
      activeClass={activeClass} 
      to={to} 
      spy={spy} 
      smooth={smooth} 
      offset={offset} 
      duration={duration}
    >
      <ImArrowDown2 />
    </StyledLink>
  )
}

Link.propTypes = {
  activeClass: PropTypes.string,
  to: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number,
}

export default Link;