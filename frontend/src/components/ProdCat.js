import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import camera from '../images/camera.jpg'
import games from '../images/games.jpg'
import headphone from '../images/headphone.jpg'
import speaker from '../images/speaker.jpg'
import smartphone from '../images/smartphone.jpg'

const ProdCat = () => {
    return (
        <div>
            <div className="cat-name d-flex align-items-center">
                <div className="v1"></div>
                &emsp;
                <h3>DISCOVER THE COLLECTIONS</h3>
            </div>

            <div className="row-prod-cat">
                <Row className="no-gutters">
                    <Col>
                        <Link to='/product'>
                            <img
                                className=""
                                src={camera}
                                width='100%'
                                height='400'
                                alt="Camera"
                            />
                            <Button variant="info" className="cat-btn-shop">
                                Shop Now
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/product'>
                            <img
                                className=""
                                src={smartphone}
                                width='100%'
                                height='400'
                                alt="smartphone"
                            />
                            <Button variant="info" className="cat-btn-shop">
                                Shop Now
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/product'>
                            <img
                                className=""
                                src={speaker}
                                width='100%'
                                height='400'
                                alt="speaker"
                            />
                            <Button variant="info" className="cat-btn-shop">
                                Shop Now
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className="no-gutters">
                    <Col>
                        <Link to='/product'>
                            <img
                                className=""
                                src={games}
                                width='100%'
                                height='400'
                                alt="Games"
                            />
                            <Button variant="info" className="cat-btn-shop2">
                                Shop Now
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/product'>
                            <img
                                className=""
                                src={headphone}
                                width='100%'
                                height='400'
                                alt="headphone"
                            />
                            <Button variant="info" className="cat-btn-shop2">
                                Shop Now
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ProdCat
