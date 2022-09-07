import styled from 'styled-components';
import theme from '../../theme';
import { hexToRgba } from '../../utils';

export const StyledHeader = styled.div`
	display: block;
	width: 100%;
	height: 70px;
	padding: 13px 0px 13px 0px;
  top: 0px;
  position: fixed;
  z-index: 1000;
  transition: ${theme.transition};
	box-sizing: border-box;
  &.light{
    background-color: ${hexToRgba(theme.palette.white, 0.95)};
    box-shadow: 0px 0px 5px 3px ${hexToRgba(theme.palette.black, 0.1)};
    &+*{
      margin-top: 70px;
    }
  }
  &.transparent{
    background-color: transparent;
    box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
  }
`;