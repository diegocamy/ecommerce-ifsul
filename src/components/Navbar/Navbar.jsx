import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

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
          <Links showMenu={showMenu}>
            <ul>
              <li>
                <NavLink activeClassName="active" to="/categories/novedades">
                  Novedades
                </NavLink>
              </li>
              <li>
                <NavLink to="/categories/femenino">Femenino</NavLink>
              </li>
              <li>
                <NavLink to="/categories/masculino">Masculino</NavLink>
              </li>
              <li>
                <NavLink to="/categories/kids">Kids</NavLink>
              </li>
              <li>
                <NavLink to="/categories/outlet">Outlet</NavLink>
              </li>
            </ul>
          </Links>
        </MiddleSection>
        <RightSideIcons>
          <div className="icons">
            <i className="fas fa-user-circle"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div className="hamburguer" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </RightSideIcons>
      </Container>
    </Nav>
  );
};

export default Navbar;
