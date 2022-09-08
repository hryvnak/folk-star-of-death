import PropTypes from 'prop-types';
import { StyledScrollToNext } from "./index.styles";
import { ImArrowDown2 } from "react-icons/im";

const ScrollToNext = (props) => {
  const { activeClass, to, spy, smooth, offset, duration } = props;
  return (
    <StyledScrollToNext 
      activeClass={activeClass} 
      to={to} 
      spy={spy} 
      smooth={smooth} 
      offset={offset} 
      duration={duration}
    >
      <ImArrowDown2 />
    </StyledScrollToNext>
  )
}

ScrollToNext.propTypes = {
  activeClass: PropTypes.string,
  to: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  offset: PropTypes.number,
  duration: PropTypes.number,
}

export default ScrollToNext;