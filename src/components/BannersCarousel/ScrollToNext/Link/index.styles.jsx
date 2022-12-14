import styled from "styled-components";
import { Link } from 'react-scroll';
import theme from "../../../../theme";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap row;
  width: calc(50px + 1.25vw);
  height: calc(50px + 1.25vw);
  background-color: ${theme.palette.primary.main};
  text-align: center;
  color: ${theme.palette.white};
  border-radius: 50%;
  box-sizing: border-box;
  &:hover{
    background-color: ${theme.palette.secondary.main};
  }
`;