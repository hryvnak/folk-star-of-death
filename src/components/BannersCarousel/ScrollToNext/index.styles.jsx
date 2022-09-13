import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "../../../theme";

export const StyledScrollToNext = styled(motion.div)`
  display: block;
  width: auto;
  height: auto;
  background: none;
  bottom: calc(50px + 1.25vw);
  left: calc(100%/2 - 25px);
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  @media screen and (max-width: calc(${theme.screenSize.tabletMini}px - 1px)) {
    bottom: 100px;
  }
`;