import PropTypes from 'prop-types';
import { StyledSlideContentWrapper } from "./index.styles";

const SlideContentWrapper = (props) => {
  const { children } = props;
  return <StyledSlideContentWrapper>{ children }</StyledSlideContentWrapper>
}

SlideContentWrapper.propTypes = {
  children: PropTypes.node,
}

export default SlideContentWrapper;