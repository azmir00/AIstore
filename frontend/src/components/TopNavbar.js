import React from "react";
import { Navbar, Nav, Container, Dropdown, Button, NavLink } from "react-bootstrap";
import ailogo from "../images/ai-store-logo.png";
import Cartpic from "../svg/shopping-cart-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const TopNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const history = useHistory();

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <>
      <Navbar bg="light" className="shadow">
        <Navbar.Brand to="/">
          <img src={ailogo} width="50" height="50" />{" "}
        </Navbar.Brand>

        <Container className="justify-content-end">
          <Link to="/" className="nav-text">Home</Link>
          <Link to="/product" className="nav-text">Product</Link>
          <Link to="/contact" className="nav-text">Contact</Link>
          <Link to="/about" className="nav-text">About</Link>
        </Container>

        <Container className="justify-content-end">
          <Link to="/cart" className="nav-text">
            <img src={Cartpic} alt="" width="30" />
            <span className="cartlogo_badge">{getCartCount()}</span>
          </Link>
          {
            userInfo ? (
              <Button className="nav-text" onClick={() => {
                localStorage.removeItem("userInfo");
                history.push("/signin");
              }}>
                {userInfo.name}
              </Button>
            ) : (
              <Link to="/signin"><Button className="nav-text">LOGIN</Button></Link>
            )
          }
        </Container>

      </Navbar>
    </>
  );
};

export default TopNavbar;
