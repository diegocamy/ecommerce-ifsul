import MainSlider from "../components/MainSlider/MainSlider";
import { Container } from "../components/Container/Container";
import SquareCards from "../components/SquareCards/SquareCards";
import app_big from "../assets/app/app_big.png";
import app_med from "../assets/app/app_med.png";
import app_small from "../assets/app/app_small.png";
import { MainSection } from "./Home.styles";
import ProductCard from "../components/ProductCard/ProductCard";

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
        <ProductCard product={data} />
        <ProductCard product={data} />
        <ProductCard product={data} />
      </div>
    </MainSection>
  );
};

export default Home;
