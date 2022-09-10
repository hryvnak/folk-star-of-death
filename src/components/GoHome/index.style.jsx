import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme";

export const StyledGoHome = styled(Link)`
  display: inline-block;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  &>svg{
    font-size: 14px;
    margin-right: 5px;
  }
  &:hover{
    border-bottom: 2px solid ${theme.palette.secondary.main};
    &>svg{
      color: ${theme.palette.secondary.main};
    }
  }
`;