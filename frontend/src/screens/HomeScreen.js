import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    return (
        <>
            <Row className="row-homepage">
                <Row className="card-homepage mt-3 shadow">
                    <Col md={4}>
                        <Card className="shadow card-prod" >
                            <a href="">
                                <img src="" width="100%" height="300" alt="" />
                            </a>
                            <a href="">
                                <p>NAMA</p>
                            </a>
                            <p>RM HARGA</p>
                            <Button variant="outline-dark" className="mb-2">
                                <Link to="">
                                    View
                                </Link>
                            </Button>
                            <Button variant="outline-primary">
                                Add to Cart
                            </Button>

                        </Card>
                    </Col>
                </Row>

            </Row>
        </>
    )
}

export default HomeScreen
