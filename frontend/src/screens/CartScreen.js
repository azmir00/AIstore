import React from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap'

const CartScreen = () => {
    return (
        <div>
            <Row>
                <Button variant="outline-dark" className="mb-2">
                    CONTINUE SHOPPING
                </Button>
            </Row>
            <Row className="mt-5 pl-5 pr-5">
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Row>
                                    <Col md={4}>
                                        <img src="" width="250" height="200" alt="" />
                                    </Col>
                                    <Col md={7}>
                                        <p><b>Product:</b> Snapback Jord Limited Edition</p>
                                        <p><b>Quantity:</b> 1</p>
                                        <p><b>Price:</b> RM 39.99</p>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header>ORDER SUMMARY</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Subtotal </td>
                                            <td>RM 39.99 </td>
                                        </tr>
                                        <tr>
                                            <td>Shipping </td>
                                            <td>RM 8.00 </td>
                                        </tr>
                                        <tr>
                                            <td><b>Total</b></td>
                                            <td><b>RM 47.99</b></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <Button variant="secondary">CHECKOUT NOW</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CartScreen
