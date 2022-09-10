import PropTypes from 'prop-types';
import { StyledCopyright } from "./index.styles";

const Copyright = (props) => {
  const { children } = props;
  return (
    <StyledCopyright>{ children }</StyledCopyright>
  )
}

Copyright.propTypes = {
  children: PropTypes.node,
}

export default Copyright;
