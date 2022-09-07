import PropTypes from 'prop-types';
import { StyledContainer } from "./index.styles";

const Container = (props) => {
  const { children } = props;
  return <StyledContainer>{ children }</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container;