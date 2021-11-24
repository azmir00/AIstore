import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../redux/actions/ProductActions';
import { addToCart } from '../redux/actions/CartActions';
import TopNavbar from '../components/TopNavbar';
import { Link } from 'react-router-dom';

const ProductScreen = ({ match, history }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
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
        history.push(`/cart`);
    };



    return (
        <div>
            <TopNavbar />

            {
                loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    <Card className="card-productDetail" >
                        <Row className="no-gutters">
                            <Col className="ml-5" >
                                <img src={product.imageUrl}
                                    width="500" height="400" alt={product.name} />
                            </Col>

                            <Col className="mr-5">
                                <h3>{product.name}</h3>
                                <br />
                                {
                                    userInfo ? (
                                        <div>
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
                                        </div>
                                    ) : (
                                        <Link to="/signin">
                                            <Button variant="primary">Login to View</Button>
                                        </Link>
                                    )
                                    }
                                {/* <h4>RM {product.price}</h4>
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
                                </Button> */}
                            </Col>
                        </Row>
                    </Card>
                )
            }
        </div>
    )
}

export default ProductScreen
