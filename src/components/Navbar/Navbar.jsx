import {
  Container,
  Links,
  Logo,
  MiddleSection,
  Nav,
  RightSideIcons,
  SearchSection,
} from "./Navbar.styles";
import { Link, NavLink } from "react-router-dom";
import { IconButton } from "../Button/Button.styles";

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo>
          <Link to="/">
            <h1>E-Shop</h1>
            <p>Ropas & Moda</p>
          </Link>
        </Logo>
        <MiddleSection>
          <SearchSection>
            <IconButton>
              <i className="fas fa-search"></i>
            </IconButton>
            <input type="text" placeholder="Qué estás buscando?" />
          </SearchSection>
          <Links>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/categoria1">
                  Novedades
                </NavLink>
              </li>
              <li>
                <NavLink to="/categoria2">Femenino</NavLink>
              </li>
              <li>
                <NavLink to="/categoria3">Masculino</NavLink>
              </li>
              <li>
                <NavLink to="/categoria4">Kids</NavLink>
              </li>
              <li>
                <NavLink to="/categoria5">Outlet</NavLink>
              </li>
            </ul>
          </Links>
        </MiddleSection>
        <RightSideIcons>
          <IconButton bgColor="transparent" color="white">
            <i class="fas fa-user-circle"></i>
          </IconButton>
          <IconButton bgColor="transparent" color="white">
            <i class="fas fa-heart"></i>
          </IconButton>
          <IconButton bgColor="transparent" color="white">
            <i class="fas fa-shopping-bag"></i>
          </IconButton>
        </RightSideIcons>
      </Container>
    </Nav>
  );
};

export default Navbar;
