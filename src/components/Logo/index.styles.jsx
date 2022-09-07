import styled from "styled-components";
import theme from '../../theme';
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
	display: block;
	width: 164px;
	height: 44px;
	background: none;
	outline: none;
	cursor: pointer;
	color: ${theme.palette.white};
  box-sizing: border-box;
`;