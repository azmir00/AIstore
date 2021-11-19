import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/ProductActions';
import { addToCart } from '../redux/actions/CartActions';

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        
    };

    // const buyNowHandler = () => {
    //     dispatch(addToCart(product._id, 1));
    //     history.push(`/cart`);
    // };



    return (
        <>
            <Row className="row-productDetail">
                {
                    loading ? (
                        <h2>Loading...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (
                        <Card className="card-productDetail mt-5 pt-5 pl-5" >
                            <Row className="">
                                <Col >
                                    <img src={product.imageUrl}
                                        width="500" height="400" alt={product.name} />
                                </Col>

                                <Col >
                                    <h3>{product.name}</h3>
                                    <br />
                                    <h4>RM {product.price}</h4>
                                    <p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
                                    <p><b>Description: </b></p>
                                    <p>{product.description}</p>
                                    <p>
                                        Quantity :
                                        <select name="qty" value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </p>
                                    <br />
                                    <Button variant="secondary" size="lg" className="mr-5" onClick={addToCartHandler} active>
                                        Add to Cart
                                    </Button>
                                    {/* <Button variant="secondary" size="lg" active onClick={buyNowHandler}>
                                        Buy Now
                                    </Button> */}
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Text className="">

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                }

            </Row>
        </>
    )
}

export default ProductScreen
