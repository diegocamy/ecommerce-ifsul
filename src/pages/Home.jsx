import MainSlider from "../components/MainSlider/MainSlider";
import { Container } from "../components/Container/Container";
import SquareCards from "../components/SquareCards/SquareCards";

const Home = () => {
  return (
    <main>
      <MainSlider />
      <Container>
        <SquareCards />
      </Container>
    </main>
  );
};

export default Home;
