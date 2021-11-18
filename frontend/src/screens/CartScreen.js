import React from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap'
import trash from '../svg/trash-solid.svg';

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
                                        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                                        width="250" height="200" alt="" />
                                    </Col>
                                    <Col md={7}>
                                        <p><b>Product:</b> Snapback Jord Limited Edition</p>
                                        <p><b>Quantity:</b> 1</p>
                                        <p><b>Price:</b> RM 39.99</p>
                                        <button><img src={trash} alt="" width="20"/></button>
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
