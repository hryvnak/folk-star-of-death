import PropTypes from 'prop-types';
import { StyledHeaderWrapper } from "./index.styles";

const HeaderWrapper = (props) => {
  const { children } = props;
  return <StyledHeaderWrapper>{ children }</StyledHeaderWrapper>
}

HeaderWrapper.propTypes = {
  children: PropTypes.node,
}

export default HeaderWrapper;