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
        <div className="container-fluid">
            <Row className="row-prod-cat mt-3">
                <Col>
                    <Link to='/product'>
                        <img
                            className=""
                            src={camera}
                            width='100%'
                            height='500'
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
                            height='500'
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
                            height='500'
                            alt="speaker"
                        />
                        <Button variant="info" className="cat-btn-shop">
                            Shop Now
                        </Button>
                    </Link>
                </Col>
            </Row>

            <Row className="row-prod-cat mt-3">
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
    )
}

export default ProdCat
