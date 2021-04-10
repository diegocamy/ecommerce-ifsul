import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { GlobalStyle } from "./App.styles";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/category" render={() => <h1>category</h1>} />
        <Route path="/product" render={() => <h1>product</h1>} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </>
  );
}

export default App;
