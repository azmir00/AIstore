import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import TopNavbar from '../components/TopNavbar'
import Footer from '../components/Footer'
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
        <div>
            <TopNavbar />

            <Row className="row-listprod no-gutters">
                {
                    loading ? (
                        <h2>Loading...</h2>
                    ) : error ? (
                        <h2>{error}</h2>
                    ) : (

                        products.map((product) => (
                            <Col md={3}>
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

            <Footer />
        </div>
    )
}

export default ListProductScreen
