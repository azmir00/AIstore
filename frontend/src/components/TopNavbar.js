import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ailogo from "../images/ai-store-logo.png";
import Cartpic from "../svg/shopping-cart-solid.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

    return (
        <Navbar className="shadow">
            <Navbar.Brand>
                <img src={ailogo} width="50" height="50" />{' '}
            </Navbar.Brand>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        {/* <Nav.Link href="/">HOME</Nav.Link> */}
                        <Link to="/" className="navb">HOME</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/product" className="navb">PRODUCT</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <Nav.Link href="#">CONTACT</Nav.Link> */}
                        <Link to="/contact" className="navb">CONTACT</Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <Nav.Link href="#">ABOUT</Nav.Link> */}
                        <Link to="/about" className="navb">ABOUT</Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Link to="/cart" className="navb">
                            <img src={Cartpic} alt="" width="30" />
                            <span className="cartlogo_badge">{getCartCount()}</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <Nav.Link href="#">LOGIN</Nav.Link> */}
                        <Link to="/login" className="navb">LOGIN</Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNavbar;
