import styled from "styled-components";
import theme from "../../../theme";
import { hexToRgba } from "../../../utils";

export const StyledMenuWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  align-content: center;
  flex-flow: nowrap column;
  width: 250px;
  height: 100vh;
  background-color: ${theme.palette.white};
  padding-top: 70px;
  right: 0px;
  top: 0px;
  position: absolute;
  z-index: 1002;
  overflow-y: scroll;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px 0px ${hexToRgba(theme.palette.black, 0.25)};
  transition: ${theme.transition};
  &.closed{
    opacity: 0;
    transform: translateX(250px);
  }
  &.open{
    opacity: 1; 
    transform: translateX(0px);
  }
`;