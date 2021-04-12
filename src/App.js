import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./App.styles";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:category" component={Category} />
        <Route path="/product" render={() => <h1>product</h1>} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
