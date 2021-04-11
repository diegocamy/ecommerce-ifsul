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
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const data = {
  id: "533418",
  nombre: "Tapado - Gris",
  precio: "$1.399,00",
  foto:
    "https://s.fenicio.app/f/bas/productos/bas-fw21-00474-4500px_450x600_1615921841_298.jpg",
  slug: "tapado_gris",
  categoria: "femenino",
  tamanios: ["P", "G", "GG"],
};

const ProductCards = () => {
  const windowWidth = useWidth();

  return (
    <Section>
      <h1>Últimas novedades</h1>
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
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard product={data} />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default ProductCards;
