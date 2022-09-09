import PropTypes from 'prop-types';
import { StyledMainNavLink } from './index.styles';

const NavLink = (props) => {
  const { children, to, onClick } = props;
  return (
    <StyledMainNavLink onClick={onClick} to={ to }>
      { children }
    </StyledMainNavLink>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func
}

export default NavLink;