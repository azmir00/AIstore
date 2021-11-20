import React from 'react'
import { Row, Col, Card, Button, Table } from 'react-bootstrap'
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../components/CartItem';
import { addToCart, removeFromCart } from '../redux/actions/CartActions';
let x = 0;
const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => { }, []);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price, item) => price + item.price * item.qty, 0)
            .toFixed(2);
    };

    return (
        <div>
            <Row className="mt-5 ml-5">
                <Link to="/">
                    <Button variant="outline-dark" className="mb-2" >
                        CONTINUE SHOPPING
                    </Button>
                </Link>
            </Row>
            <Row className="mt-2 pl-5 pr-5">
                <Col md={8}>
                    {
                        cartItems.length === 0 ? (
                            <h1>Your Cart is empty</h1>
                        ) : cartItems.map(item => (

                            <CartItem
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeFromCartHandler}
                            />


                        ))
                    }
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header>ORDER SUMMARY</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Total ({getCartCount()}) items</td>
                                            <td>RM {getCartSubTotal()}</td>
                                        </tr>
                                        {/* <tr>
                                            <td>Shipping </td>
                                            <td>RM 8.00 </td>
                                        </tr>
                                        <tr>
                                            <td><b>Total</b></td>
                                            <td><b>RM 47.99</b></td>
                                        </tr> */}
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
