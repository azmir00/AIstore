import React from "react";
import { Navbar} from "react-bootstrap";
import ailogo from "../images/ai-store-logo.png";
import { useSelector } from "react-redux";

// Import Screens
import { Link } from "react-router-dom";

const NavBarLogin = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <Navbar bg="light" className="shadow">
      <Navbar.Brand>
        <Link to="/"><img src={ailogo} width="50" height="50"/>{" "}</Link>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBarLogin;
