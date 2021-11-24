import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer >
                <div className="footer-area">
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    <h3>About Us</h3>
                                    <hr />
                                    <p>Navigating a store can be difficult, but AI Store created the StoreBot
                                        to help customers find their way around the store and get the items they need.</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h3>Get in Touch</h3>
                                    <hr />
                                    <p>Tingkat 11,
                                        Suria KLCC, Kuala Lumpur City Centre,
                                        50088 Kuala Lumpur,
                                        Wilayah Persekutuan Kuala Lumpur.</p>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <h3>Pages</h3>
                                    <hr />
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/product">Product</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="copyright">
                    <Container>
                        <Row>
                            <div>
                                <p>Copyrights &copy; 2021 - Azmir & Irfan, All Rights Reserved.</p>
                            </div>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default Footer
