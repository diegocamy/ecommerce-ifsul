import SquareCard from "../SquareCard/SquareCard";
import { Section, CardsContainer } from "./SquareCards.styles";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sq1 from "../../assets/squarecards/sq1.png";
import sq2 from "../../assets/squarecards/sq2.png";
import sq3 from "../../assets/squarecards/sq3.png";
import sq4 from "../../assets/squarecards/sq4.png";
import sq5 from "../../assets/squarecards/sq5.png";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useWidth } from "../../hooks/useWidth";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function SquareCards() {
  const width = useWidth();
  return (
    <Section>
      <h1>Es fácil ser fashion</h1>

      {width > 900 ? (
        <CardsContainer>
          <SquareCard
            cardText="Femenino"
            img={sq4}
            link="/categories/femenino"
          />
          <SquareCard
            cardText="Masculino"
            img={sq1}
            link="/categories/masculino"
          />
          <SquareCard
            cardText="Novedades"
            img={sq3}
            link="/categories/novedades"
          />
          <SquareCard cardText="Kids" img={sq2} link="/categories/kids" />
          <SquareCard cardText="Outlet" img={sq5} link="/categories/outlet" />
        </CardsContainer>
      ) : (
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <SquareCard
              cardText="Femenino"
              img={sq4}
              link="/categories/femenino"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SquareCard
              cardText="Masculino"
              img={sq1}
              link="/categories/masculino"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SquareCard
              cardText="Novedadees"
              img={sq3}
              link="/categories/novedades"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SquareCard cardText="Kids" img={sq2} link="/categories/kids" />
          </SwiperSlide>
          <SwiperSlide>
            <SquareCard cardText="Outlet" img={sq5} link="/categories/outlet" />
          </SwiperSlide>
        </Swiper>
      )}
    </Section>
  );
}

export default SquareCards;
