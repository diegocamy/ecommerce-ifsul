import React from "react";
import { Button } from "../Button/Button.styles";
import { FooterContainer, FooterSection, Logo } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <div className="left">
          <Logo>
            <h1>E-Shop</h1>
            <p>Ropas & Moda</p>
          </Logo>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ad
            sunt reiciendis! Fugit magni
          </p>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter-square"></i>
        </div>
        <div className="links">
          <div className="enlaces">
            <h3>Enlaces</h3>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>
            <p>Enlace 4</p>
            <p>Enlace 5</p>
          </div>
          <div className="enlaces">
            <h3>Enlaces</h3>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>
            <p>Enlace 4</p>
            <p>Enlace 5</p>
          </div>
          <div className="enlaces">
            <h3>Enlaces</h3>
            <p>Enlace 1</p>
            <p>Enlace 2</p>
            <p>Enlace 3</p>
            <p>Enlace 4</p>
            <p>Enlace 5</p>
          </div>
        </div>
        <div className="right">
          <h3>Suscríbete a nuestro newsletter.</h3>
          <div className="input">
            <input type="text" placeholder="Tu email" />
            <Button>Suscribirse</Button>
          </div>
          <div className="inferior">
            <p>
              Recibirás un correo por mes con todas nuestras novedades, ofertas
              y publicaciones destacadas del blog.
            </p>
          </div>
        </div>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
