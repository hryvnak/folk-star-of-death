import styled from "styled-components";
import theme from "../../../theme";
import { StyledNavLink } from "../../NavLink/index.styles";

export const StyledMainNavLink = styled(StyledNavLink)`
  padding: 5px 0px 5px 0px;
  margin: 0px 15px 0px 15px;
  text-decoration: none;
  position: relative;
  z-index: 1;
  &:before,
  &:after{
    content: '';
    display: inline-block;
    width: 0px;
    height: 2px;
    bottom: -5px;
    position: absolute;
    z-index: 1;
    transition: ${theme.transition};
  }
  &:before{
    background: ${theme.palette.primary.main};
    right: 50%;
  }
  &:after{
    background: ${theme.palette.secondary.main};
    left: 50%;
  }
  &:hover:before,
  &:hover:after,
  &.active:before,
  &.active:after{
    width: 50%;
  }
  &.active{
    color: ${theme.palette.primary.main};
  }
  .light &{
    color: ${theme.palette.dark.dark2};
  }
  .transparent &{
    color: ${theme.palette.white};
  }
`;
