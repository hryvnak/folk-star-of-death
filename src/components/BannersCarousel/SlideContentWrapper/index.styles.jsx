import styled from "styled-components";
import theme from "../../../theme";
import { StyledContainer } from "../../Container/index.styles";

export const StyledSlideContentWrapper = styled(StyledContainer)`
	display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
  flex-flow: nowrap column;
  text-align: center;
  padding: calc(30px + 2vw) 50px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: absolute;
  z-index: 1;
  @media screen and (min-width: ${theme.screenSize.fullSize}) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;