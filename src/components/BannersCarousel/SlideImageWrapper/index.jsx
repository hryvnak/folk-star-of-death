import PropTypes from 'prop-types';
import { StyledSlideImageWrapper } from "./index.styles";

const SlideImageWrapper = (props) => {
  const {src, alt, width, height} = props;

  return (
    <StyledSlideImageWrapper>
      <img src={src} alt={alt} width={width} height={height} />
    </StyledSlideImageWrapper>
  )
}

SlideImageWrapper.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default SlideImageWrapper;