import React from "react";
import { Link } from "react-router-dom";
import { Button, WhiteButton } from "../../components/Button/Button.styles";
import ProductCards from "../../components/ProductCards/ProductCards";
import Spinner from "../../components/Spinner/Spinner";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import {
  Container,
  ImageContainer,
  ProductContainer,
  TinyImages,
  TinyImage,
  LeftContainer,
  RightContainer,
  BackToCategorie,
  ProductInfo,
  SilverBox,
} from "./Product.styles";

const Product = (props) => {
  const {
    match: {
      params: { product_slug: slug },
    },
  } = props;
  const { loading, product } = useFetchProduct(slug);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Container>
        <ProductContainer>
          <LeftContainer>
            <ImageContainer foto={product.foto} />
            <TinyImages>
              <TinyImage>
                <img src={product.foto} alt="foto_alternativa" />
              </TinyImage>
              <TinyImage>
                <img src={product.foto} alt="foto_alternativa" />
              </TinyImage>
              <TinyImage>
                <img src={product.foto} alt="foto_alternativa" />
              </TinyImage>
              <TinyImage>
                <img src={product.foto} alt="foto_alternativa" />
              </TinyImage>
            </TinyImages>
          </LeftContainer>
          <RightContainer>
            <BackToCategorie>
              <Link to={`/categories/${product.categoria}`}>
                &lt; volver a <span>{product.categoria}</span>
              </Link>
            </BackToCategorie>
            <ProductInfo>
              <h2>{product.nombre}</h2>
              <span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i> | 9 opiniones
              </span>
              <h2 className="price">{product.precio}</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus quidem dolores beatae quas aut cumque quis, est
                voluptatibus voluptatum, labore magni dolor commodi iusto
                necessitatibus! Eaque, illum. Sint suscipit magni dolor esse?
              </p>
              <div className="talle">
                <h3>TALLE</h3>
                <div className="cajas">
                  {product.tamanios.map((e, i) => (
                    <div key={i} className="caja">
                      <h3>{e}</h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="color">
                <h3>COLOR</h3>
                <select>
                  <option value="Seleccionar">Seleccionar</option>
                </select>
              </div>
              <div className="buttons">
                <Button>
                  <i className="fas fa-shopping-bag"></i>Agregar a la bolsa
                </Button>
                <WhiteButton>
                  <i className="far fa-heart"></i>Agregar a favoritos
                </WhiteButton>
              </div>
            </ProductInfo>
          </RightContainer>
        </ProductContainer>
      </Container>
      <SilverBox>
        <Container width="1024px">
          <ProductCards
            text="Productos similares que quizás te gusten"
            numOfCards={9}
          />
        </Container>
      </SilverBox>
    </>
  );
};

export default Product;
