import React from 'react'
import { Row, Col } from 'react-bootstrap'
import TopNavbar from "../components/TopNavbar";
import Product from '../components/Product'
import ImageSlider from '../components/ImageSlider'
import ProdCat from '../components/ProdCat'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { getProducts as listProducts } from '../redux/actions/ProductActions';
const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <>
            <TopNavbar />
            <ImageSlider />
            <ProdCat />
            <Footer />
        </>
    )
}

export default HomeScreen
