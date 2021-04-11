import SquareCard from "../SquareCard/SquareCard";
import { Section, CardsContainer } from "./SquareCards.styles";

import sq1 from "../../assets/squarecards/sq1.png";
import sq2 from "../../assets/squarecards/sq2.png";
import sq3 from "../../assets/squarecards/sq3.png";
import sq4 from "../../assets/squarecards/sq4.png";
import sq5 from "../../assets/squarecards/sq5.png";

function SquareCards() {
  return (
    <Section>
      <h1>Es fácil ser fashion</h1>

      <CardsContainer>
        <SquareCard cardText="Femenino" img={sq4} />
        <SquareCard cardText="Masculino" img={sq1} />
        <SquareCard cardText="Novedades" img={sq3} />
        <SquareCard cardText="Kids" img={sq2} />
        <SquareCard cardText="Outlet" img={sq5} />
      </CardsContainer>
    </Section>
  );
}

export default SquareCards;
