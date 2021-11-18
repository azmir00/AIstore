import React from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'

const ProductScreen = () => {
    return (
        <>
            <Row className="row-productDetail">
                <Card className="card-productDetail mt-5 pt-5 pl-5" >
                    <Row className="">
                        <Col >
                            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                            width="500" height="400" alt="" />
                        </Col>

                        <Col >
                            <h3>Snapback Premium Jordan</h3>
                            <br />
                            <h4>RM 99.99</h4>
                            <p>Status: <span>In Stock</span></p>
                            <p><b>Description: </b></p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae fuga facere. Beatae, ipsam aliquid. Distinctio quasi, deleniti aliquid a facere, quos laboriosam dicta illo ullam ab provident atque vero.</p>
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
