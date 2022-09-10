import styled from "styled-components";
import theme from "../../../theme";

export const StyledCopyright = styled.div`
  display: block;
  width: auto;
  height: auto;
  background: none;
  font-size: 16px;
  color: ${theme.palette.light.light3};
  box-sizing: border-box;
  &>a{
    text-decoration: none;
    &:hover{
      color: ${theme.palette.secondary.main}
    }
    &>svg{
      margin-left: 5px;
      vertical-align: text-top;
    }
  }
`;