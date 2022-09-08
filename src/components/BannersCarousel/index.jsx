import { uniqueId } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import SlideImageWrapper from "./SlideImageWrapper";
import SlideContentWrapper from "./SlideContentWrapper";
import { StyledSlideHeading as SlideHeading, StyledSlideDesc as SlideDesc } from "./SlideContent/index.style";
import ScrollToNext from "./ScrollToNext";

import "swiper/css";
import "swiper/css/navigation";
import CarouselCSS from './carousel.css';

import slideImage1 from '../../assets/images/banners-carousel/1.jpg';
import slideImage2 from "../../assets/images/banners-carousel/2.jpg";
import slideImage3 from '../../assets/images/banners-carousel/3.jpeg';


const data = [
  {
    img: {src: slideImage1, alt: "Український супутник ICEYE", width: "3840", height: "2160"},
    text: {
      header: "Цей день настав!",
      desc: "<p>Притула купив супутник за зібрані на Байрактари гроші</p>"
    }
  },
  {
    img: {src: slideImage2, alt: "Український супутник ICEYE", width: "1920", height: "1080"},
    text: {
      header: "Бавовни буде багато!",
      desc: "<p>Притула купив супутник за зібрані на Байрактари гроші</p>"
    }
  },
  {
    img: {src: slideImage3, alt: "Український супутник ICEYE", width: "1920", height: "1080"},
    text: {
      header: "Народна зірка смерті!",
      desc: "<p>Купили супутник: Притула відзвітувався про зібрані кошти з проекту “Народний Байрактар”.</p>"
    }
  },
  
]

const BannersCarousel = () => {
  return (
    <>
      <CarouselCSS />
      <Swiper 
        autoplay={{delay: 5000, disableOnInteraction: false,}} 
        navigation={true} 
        modules={[Autoplay, Navigation]} 
        className="mySwiper">
        {
          data.map((slide) => {
            return (
              <SwiperSlide key={uniqueId()}>
                <SlideImageWrapper 
                  src={slide.img.src} 
                  alt={slide.img.alt} 
                  width={slide.img.width} 
                  height={slide.img.height} 
                />
                <SlideContentWrapper>
                  <SlideHeading>{slide.text.header}</SlideHeading>
                  <SlideDesc dangerouslySetInnerHTML={{ __html: slide.text.desc }} />
                </SlideContentWrapper>
              </SwiperSlide>
            )
          })
        }
        <ScrollToNext 
          activeClass="active" 
          to="section1" 
          spy={true} 
          smooth={true} 
          offset={0} 
          duration={500} 
        />
      </Swiper>
    </>
  );
}

export default BannersCarousel;