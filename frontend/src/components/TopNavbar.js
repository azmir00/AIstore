import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import ailogo from "../images/ai-store-logo.png";
import Cartpic from "../svg/shopping-cart-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import signout from "../redux/actions/UserActions";

const TopNavbar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <Navbar className="shadow">
      <Navbar.Brand>
        <img src={ailogo} width="50" height="50" />{" "}
      </Navbar.Brand>

      <Container className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Link to="/" className="nav-text">
              HOME
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/product" className="nav-text">
              PRODUCT
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/contact" className="nav-text">
              CONTACT
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about" className="nav-text">
              ABOUT
            </Link>
          </Nav.Item>
        </Nav>
      </Container>

      <Container className="justify-content-end">
        <Nav>
          <Nav.Item>
            <Link to="/cart">
              <img src={Cartpic} alt="" width="30" />
              <span className="cartlogo_badge">{getCartCount()}</span>
            </Link>
          </Nav.Item>

          <div>
            {userInfo ? (
              <div className="">
                <Link to="#" className="profile-text">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                  {""}
                </Link>
              </div>
            ) : (
              <Link to="/signin" className="nav-text">
                LOGIN
              </Link>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
