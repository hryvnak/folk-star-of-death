import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

export default createGlobalStyle`
  .swiper {
    width: 100%;
    height: 100vh;
    background-color: ${theme.palette.dark.dark3};
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-next, 
  .swiper-button-prev{
    color: ${theme.palette.white};
  }
  .swiper-button-next:after, 
  .swiper-button-prev:after{
    font-size: 30px;
  }
  `;