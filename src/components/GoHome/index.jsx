import { StyledGoHome } from "./index.style";
import { ImArrowLeft2 } from "react-icons/im";
import PropTypes from 'prop-types';

const GoHome = (props) => {
  const {to, name} = props;
  return (
    <StyledGoHome to={to}>
      <ImArrowLeft2 />
      {name}
    </StyledGoHome>
  )
}

GoHome.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string
}

export default GoHome;