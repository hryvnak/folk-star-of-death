import PropTypes from 'prop-types';
import { StyledMenuWrapper } from "./index.styles";

const MenuWrapper = (props) => {
  const { children, className = "closed" } = props;
  console.log(props)
  return (
    <StyledMenuWrapper className={ className }>
      { children }
    </StyledMenuWrapper>
  )
}

MenuWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default MenuWrapper;