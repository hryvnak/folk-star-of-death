import styled from "styled-components";
import theme from "../../../theme";
import { StyledNavLink } from "../../NavLink/index.styles";

export const StyledMainNavBarLink = styled(StyledNavLink)`
  width: 100%;
  background: none;
  padding: 10px 20px 10px 20px;
  text-align: center;
  color: ${theme.palette.dark.dark2};
  text-decoration: none;
  position: relative;
  z-index: 1;
  &:hover,
  &.active{
    background-color: ${theme.palette.light.light1};
    color: ${theme.palette.primary.main};
  }
`;
