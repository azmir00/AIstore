import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <Row className="row-homepage">
                <Row className="card-homepage mt-3 shadow">
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                    <Col md={4}>
                        <Product />
                    </Col>
                </Row>

            </Row>
        </>
    )
}

export default HomeScreen
