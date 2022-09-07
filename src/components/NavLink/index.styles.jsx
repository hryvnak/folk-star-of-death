import styled from "styled-components";
import theme from '../../theme';
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: auto;
  height: auto;
  line-height: ${theme.lineHeight};
  background: none;
  outline: none;
  box-sizing: border-box;
  transition: ${theme.transition};
`;