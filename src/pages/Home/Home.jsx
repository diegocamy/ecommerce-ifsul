import MainSlider from "../../components/MainSlider/MainSlider";
import { Container } from "../../components/Container/Container";
import SquareCards from "../../components/SquareCards/SquareCards";
import app_big from "../../assets/app/app_big.png";
import app_med from "../../assets/app/app_med.png";
import app_small from "../../assets/app/app_small.png";
import { MainSection } from "./Home.styles";
import ProductCards from "../../components/ProductCards/ProductCards";
import BigCards from "../../components/BigCards/BigCards";

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
          <ProductCards text="Últimas novedades" numOfCards={9} />
        </Container>
      </div>
      <BigCards numOfCards={2} />
      <div className="gray">
        <Container>
          <ProductCards text="Preferidos del momento" numOfCards={9} />
        </Container>
      </div>
      <BigCards numOfCards={2} />
      <div className="gray">
        <Container>
          <ProductCards text="Elegidos especialmente para ti" numOfCards={9} />
        </Container>
      </div>
      <BigCards numOfCards={2} />
    </MainSection>
  );
};

export default Home;
