import PropTypes from 'prop-types';
import { StyledFooterWrapper } from "./index.styles";

const FooterWrapper = (props) => {
  const { children } = props;
  return <StyledFooterWrapper>{ children }</StyledFooterWrapper>
}

FooterWrapper.propTypes = {
  children: PropTypes.node,
}

export default FooterWrapper;