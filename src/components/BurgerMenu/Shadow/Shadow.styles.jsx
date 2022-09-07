import styled from "styled-components";
import { hexToRgba } from "../../../utils";
import theme from "../../../theme";

export const StyledShadow = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${hexToRgba(theme.palette.black, 0.25)};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  transition: ${theme.transition};
  &.hidden{
    opacity: 0;
    visibility: hidden;
  }
  &.visible{
    opacity: 1; 
    z-index: 1001;
    visibility: visible;
  }
`;