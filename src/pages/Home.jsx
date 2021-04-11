import MainSlider from "../components/MainSlider/MainSlider";
import { Container } from "../components/Container/Container";
import SquareCards from "../components/SquareCards/SquareCards";
import app_big from "../assets/app/app_big.png";
import app_med from "../assets/app/app_med.png";
import app_small from "../assets/app/app_small.png";
import { BigCardsContainer, MainSection } from "./Home.styles";
import ProductCards from "../components/ProductCards/ProductCards";
import BigCard from "../components/BigCard/BigCard";

const Home = () => {
  return (
    <MainSection>
      <MainSlider />
      <Container>
        <SquareCards />
      </Container>
      <picture>
        <source srcSet={app_big} media="(min-width: 1200px)" />
        <source srcSet={app_med} media="(min-width: 601px)" />
        <img src={app_small} alt="download_banner" />
      </picture>
      <div className="gray">
        <Container>
          <ProductCards />
        </Container>
      </div>
      <BigCardsContainer>
        <BigCard
          img="https://s.fenicio.app/f/bas/productos/bas-fw21-00474-4500px_450x600_1615921841_298.jpg"
          text="Novedades en Jeans"
          subtext="A partir de $799,90"
          buttonText="Descubrir"
          linkTo="/masculino"
        />
        <BigCard
          img="https://s.fenicio.app/f/bas/productos/bas-fw21-00474-4500px_450x600_1615921841_298.jpg"
          text="Novedades en Jeans"
          subtext="A partir de $799,90"
          buttonText="Descubrir"
          linkTo="/masculino"
        />
      </BigCardsContainer>
    </MainSection>
  );
};

export default Home;
