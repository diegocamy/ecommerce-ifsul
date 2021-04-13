import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./App.styles";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories/:category" component={Category} />
        <Route path="/products/:product_slug" component={Product} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
