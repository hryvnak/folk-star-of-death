import PropTypes from 'prop-types';
import { StyledMenuButton } from "./index.styles";

const MenuButton = (props) => {
  const {onClick, className, ariaLabel} = props;
  return (
    <StyledMenuButton onClick={onClick} className={className} aria-label={ariaLabel} type="button">
      <span></span>
    </StyledMenuButton>
  )
}

MenuButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default MenuButton;