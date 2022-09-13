import PropTypes from 'prop-types';
import { StyledSlideImageWrapper } from "./index.styles";
import { motion } from 'framer-motion';

const SlideImageWrapper = (props) => {
  const {active, src, alt, width, height} = props;

  return (
    <StyledSlideImageWrapper>
      <motion.img 
        /* initial={{
          opacity: active ? 1 : 0,
        }}
        animate={{ 
          opacity: active ? 1 : 0,
        }} 
        transition={{ 
          duration: 1.5 
        }} */
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
      />
    </StyledSlideImageWrapper>
  )
}

SlideImageWrapper.propTypes = {
  active: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default SlideImageWrapper;