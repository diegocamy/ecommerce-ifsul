import { Container } from "./NotFound.styles";

import notfound from "../../assets/404/404.png";
import { useRedirect } from "../../hooks/useRedirect";

const NotFound = () => {
  const count = useRedirect();

  return (
    <Container>
      <h2>Oops, parece que la página que estabas buscando no existe</h2>
      <p>
        Redireccionando a la página principal en {count}{" "}
        {count > 1 ? "segundos" : "segundo"}
      </p>
      <img src={notfound} alt="not found" />
    </Container>
  );
};

export default NotFound;
