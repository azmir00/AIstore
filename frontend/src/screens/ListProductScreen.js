import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProducts as listProducts } from '../redux/actions/ProductActions';

const ListProductScreen = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="container-fluid">
            <Row className="row-listprod">
                <Row>
                    {
                        loading ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h2>{error}</h2>
                        ) : (

                            products.map((product) => (
                                <Col md={4} className="col-listprod">
                                    <Product
                                        key={product._id}
                                        productId={product._id}
                                        name={product.name}
                                        price={product.price}
                                        imageUrl={product.imageUrl}
                                    />
                                </Col>
                            ))
                        )
                    }
                </Row>
            </Row>
        </div>
    )
}

export default ListProductScreen
