import styled from "styled-components";
import theme from "../../../theme";

export const StyledMenuButton = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;
	align-content: center;
  flex-flow: nowrap row;
  width: 44px;
  height: 44px;
  background: none;
  padding: 0px;
  border: 0px;
  position: relative;
  z-index: 1003;
  cursor: pointer;
  &>span{
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.palette.primary.main};
    position: relative;
    z-index: 1;
    transition: ${theme.transition};
    &:before,
    &:after{
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.palette.primary.main};
      position: absolute;
      z-index: 1;
      transition: ${theme.transition};
    }
    &:before{
      top: 8px;
      left: 0px;
    }
    &:after{
      bottom: 8px;
      left: 0px;
    }
  }
  &.open{
    &>span{
      background-color: transparent;
      &:before{
        top: 0px;
        bottom: 0px;
        transform: rotate(45deg);
      }
      &:after{
        top: 0px;
        bottom: 0px;
        transform: rotate(-45deg);
      }
    }
  }
  .transparent &:not(.open)>span{
    background-color: ${theme.palette.white};
    &:before,
    &:after{
      background-color: ${theme.palette.white};
    }
  }
`;