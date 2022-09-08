import styled from "styled-components";
import theme from "../../../theme";
import { hexToRgba } from "../../../utils";

export const StyledSlideImageWrapper = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: none;
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  &:before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${hexToRgba(theme.palette.dark.dark3, 0.75)};
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    position: absolute;
    z-index: 1;
  }
  &>img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;