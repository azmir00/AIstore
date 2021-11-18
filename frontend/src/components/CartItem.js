import React from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap'
import trash from '../svg/trash-solid.svg';
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col md={4}>
                                <img src={item.imageUrl}
                                    width="250" height="200" alt={item.name} />
                            </Col>
                            <Col md={7}>
                                <Link to={`/product/${item.product}`} className="cartItem__name">
                                    <p><b>Name:</b> {item.name}</p>
                                </Link>
                                <p><b>Price:</b> RM {item.price}</p>
                                <p>
                                    <b>Quantity: </b>
                                    {
                                        <select
                                            value={item.qty}
                                            onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                                            className="cartItem__select">
                                            {[...Array(item.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    }
                                </p>
                                <Button onClick={() => removeHandler(item.product)}>
                                    <img src={trash} alt="" width="20" />
                                </Button>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default CartItem
