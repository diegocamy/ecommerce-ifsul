import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { Section } from "./ProductCards.styles";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useWidth } from "../../hooks/useWidth";
import { obtenerProductosAleatorios } from "../../utils/utils";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const ProductCards = ({ text, numOfCards }) => {
  const windowWidth = useWidth();
  const products = obtenerProductosAleatorios(numOfCards);

  return (
    <Section>
      <h1>{text}</h1>
      <Swiper
        slidesPerView={1}
        navigation={windowWidth > 1040 ? true : false}
        breakpoints={{
          400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
          },
        }}
        loop
        speed={1000}
        pagination={{ clickable: true }}
      >
        {products.map((p) => {
          return (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Section>
  );
};

export default ProductCards;
