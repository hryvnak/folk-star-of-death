import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { StyledScrollToNext } from "./index.styles";
import Link from "./Link";

const ScrollToNext = (props) => {
  const controls = useAnimation();

  useEffect(() =>{
    controls.start({
      y: 20,
      transition: {
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 1.5 
      },
    })
  })

  return (
    <StyledScrollToNext 
      animate={controls} 
      onHoverStart={ 
        () => (
          controls.start({ 
            y: 0, 
            transition: {repeat: 0}
          })
        )
      }
      onHoverEnd={ 
        () => controls.start({
          y: 20,
          transition: {repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.5 
          },
        })
      }
    >
      <Link {...props} />
    </StyledScrollToNext>
  )
}

export default ScrollToNext;