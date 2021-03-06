import { useRef } from "react";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import Spinner from "../../components/Spinner/Spinner";
import {
  CategoryContainer,
  Main,
  BreadCrumb,
  Filtros,
  CardsContainer,
  FiltroSuperior,
} from "./Category.styles";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Link, Redirect } from "react-router-dom";

const Category = (props) => {
  const selectEl = useRef();
  const {
    match: {
      params: { category: categoria },
    },
  } = props;
  const { loading, products, productCategory, sortResults } = useFetchCategory(
    categoria
  );

  const handleChange = () => {
    sortResults(selectEl.current.value);
  };

  if (loading) {
    return <Spinner />;
  }

  if (!loading && products.length === 0) {
    return <Redirect to="/404" />;
  }

  return (
    <Main>
      <CategoryContainer>
        <BreadCrumb>
          <h1>{productCategory}</h1>
          <Link to="/">Pagina principal</Link> /{" "}
          <span>
            <Link to={categoria}>{productCategory}</Link>
          </span>
        </BreadCrumb>
        <FiltroSuperior>
          <p>Items por pagina:</p>
          <select name="items" id="items">
            <option value="12">12</option>
            <option value="12">18</option>
            <option value="12">24</option>
            <option value="12">30</option>
          </select>
          <select
            name="ordenar"
            id="ordenar"
            onChange={handleChange}
            ref={selectEl}
            defaultValue="por defecto"
          >
            <option value="por defecto">Por defecto</option>
            <option value="mayor precio">Mayor precio</option>
            <option value="menor precio">Menor precio</option>
            <option value="nombre ascendente">Nombre ascendente</option>
            <option value="nombre descendente">Nombre descendente</option>
          </select>
        </FiltroSuperior>
        <div className="contenido">
          <Filtros>
            <h3>Estilos</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <hr />
            <h3>Materiales</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <hr />
            <h3>Colores</h3>
            <select>
              <option value="Todos">Todos</option>
            </select>
            <hr />
            <h3>Coleccion</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <hr />
            <h3>Precio ($)</h3>
            <input type="text" placeholder=" Desde" />
            <span> - </span>
            <input type="text" placeholder=" Hasta" />
            <hr />
            <h3>Especiales</h3>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <hr />
          </Filtros>
          <CardsContainer>
            {products.map((p) => (
              <ProductCard withBorder={true} key={p.id} product={p} />
            ))}
          </CardsContainer>
        </div>
      </CategoryContainer>
    </Main>
  );
};

export default Category;
