import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const ProductScreen = () => {
    return (
        <>
            <Row className="row-idDetail">
                <Card className="card-idDetail mt-5 pt-5 pl-5" >
                    <Row className="">
                        <Col >
                            <img src="" width="500" height="400" alt="" />
                        </Col>

                        <Col >
                            <h3>NAMA</h3>
                            <br />
                            <h4>RM HARGA</h4>
                            <br />
                            <p><b>Description: </b></p>
                            <p>MAKLUMAT</p>
                            <br />
                            <Button variant="secondary" size="lg" className="mr-5" active>
                                Add to Cart
                            </Button>
                            <Button variant="secondary" size="lg" active>
                                Buy Now
                            </Button>
                        </Col>
                    </Row>
                    <Card.Body>
                        <Card.Text className="">

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default ProductScreen
