import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import SigninScreen from "./screens/SigninScreen";
import ListProductScreen from "./screens/ListProductScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Components
import { useSelector } from "react-redux";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product" component={ListProductScreen} />
            <Route exact path="/signin" component={SigninScreen} />
            <Route exact path="/register" component={RegisterScreen} />
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
