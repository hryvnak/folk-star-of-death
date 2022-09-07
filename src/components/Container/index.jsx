import { StyledContainer } from "./index.styles";

const Container = (props) => {
  const { children } = props;
  return <StyledContainer>{ children }</StyledContainer>
}

export default Container;