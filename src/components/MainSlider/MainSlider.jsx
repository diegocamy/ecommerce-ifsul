import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageContainer, Slider } from "./MainSlider.styles";

import banner1 from "../../assets/mainslider/banner1.png";
import banner2 from "../../assets/mainslider/banner2.png";
import banner1sq from "../../assets/mainslider/banner1sq.png";
import banner2sq from "../../assets/mainslider/banner2sq.png";

import { useWidth } from "../../hooks/useWidth";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function MainSlider() {
  const windowWidth = useWidth();

  return (
    <Slider>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {windowWidth > 600 ? (
          <>
            <SwiperSlide>
              <ImageContainer>
                <img src={banner1} alt="banner 1" />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ImageContainer>
                <img src={banner2} alt="banner 2" />
              </ImageContainer>
            </SwiperSlide>
          </>
        ) : (
          <>
            <SwiperSlide>
              <ImageContainer>
                <img src={banner1sq} alt="banner 1" />
              </ImageContainer>
            </SwiperSlide>
            <SwiperSlide>
              <ImageContainer>
                <img src={banner2sq} alt="banner 2" />
              </ImageContainer>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Slider>
  );
}

export default MainSlider;
