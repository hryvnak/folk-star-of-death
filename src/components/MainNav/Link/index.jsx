import PropTypes from 'prop-types';
import { StyledMainNavLink } from './index.styles';

const NavLink = (props) => {
  const { children, to } = props;
  return (
    <StyledMainNavLink to={ to }>
      { children }
    </StyledMainNavLink>
  )
}

NavLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default NavLink;