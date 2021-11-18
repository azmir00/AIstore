import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ailogo from '../images/ai-store-logo.png';
import Cartpic from '../svg/shopping-cart-solid.svg';

const TopNavbar = () => {
    return (
        <Navbar className="shadow">
            <Navbar.Brand>
                <img src={ailogo} width="50" height="50" />{' '}
            </Navbar.Brand>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/">HOME</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">PRODUCT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">CONTACT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">ABOUT</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="/cart">
                            <img src={Cartpic} alt="" width="30" />
                            <span className="cartlogo_badge">0</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">LOGIN</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default TopNavbar
