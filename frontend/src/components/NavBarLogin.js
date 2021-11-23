import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ailogo from "../images/ai-store-logo.png";
import Cartpic from "../svg/shopping-cart-solid.svg";
import { useSelector } from "react-redux";

// Import Screens
import ContactScreen from "../screens/ContactScreen";
import AboutScreen from "../screens/AboutScreen";

const TopNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <Navbar className="shadow">
      <Navbar.Brand>
        <img src={ailogo} width="50" height="50" />{" "}
      </Navbar.Brand>
    </Navbar>
  );
};

export default TopNavbar;
