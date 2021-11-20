import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";

// Components
import TopNavbar from "./components/TopNavbar";
import SigninScreen from "./screens/SigninScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNavbar />

        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/signin" component={SigninScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
            <Route exact path="/contact" component={ContactScreen} />
            <Route exact path="/about" component={AboutScreen} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
