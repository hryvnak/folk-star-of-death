import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledScrollToNext = styled(motion.div)`
  display: block;
  width: auto;
  height: auto;
  background: none;
  bottom: calc(30px + 1.25vw);
  left: calc(100%/2 - 25px);
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
`;