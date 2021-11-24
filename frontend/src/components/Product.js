import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { useSelector } from "react-redux";

const Product = ({ imageUrl, name, price, productId }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <>
            <div className="col-listprod">
                <div className="listprod-img">
                    <img src={imageUrl} width="100%" height="300" alt={name} /><br /><br />
                </div>
                
                {
                    userInfo ? (
                        <div>
                            <Link to={`/product/${productId}`}><h4>{name}</h4></Link>
                            <Link to={`/product/${productId}`}>RM {price}</Link>
                        </div>
                        
                    ) : (
                        <div>
                            <Link to={`/product/${productId}`}><h4>{name}</h4></Link>
                            <Link to="/signin" style={{ backgroundColor: 'white' }}>RM Login to view</Link>
                        </div>
                        
                    )
                }
                <br /><br />
            </div>
        </>
    )
}

export default Product
