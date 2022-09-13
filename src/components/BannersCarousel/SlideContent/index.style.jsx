import theme from "../../../theme";
import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSlideHeading = styled(motion.div)`
  display: block;
  width: auto;
  height: auto;
  line-height: 1.2;
  background: none;
  font-family: ${theme.font.family2};
  font-size: calc(30px + 2vw);
  font-weight: ${theme.font.weight.bold};
  color: ${theme.palette.white};
  box-sizing: border-box;
  @media screen and (min-width: ${theme.screenSize.fullSize}) {
    font-size: 70px;
  }
`;

export const StyledSlideDesc = styled(motion.div)`
  display: block;
  width: auto;
  height: auto;
  background: none;
  margin-top: 15px;
  box-sizing: border-box;
  &>p{
    font-size: calc(${theme.font.size.body}  + 0.25vw);
    font-weight: ${theme.font.weight.normal};
    color: ${theme.palette.white};
  }
`;