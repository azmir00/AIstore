import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import { useSelector } from "react-redux";

const Product = ({ imageUrl, name, price, productId }) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <>
            <Card  >
                <Card.Img
                    src={imageUrl}
                    width="100%" height="300" alt={name} />
                <Card.ImgOverlay className="each-prod">
                    <Card.Title>
                        <span style={{ backgroundColor: 'white' }}>{name}</span>
                    </Card.Title>
                    <Card.Text>
                        {
                            userInfo ? (
                                <span style={{ backgroundColor: 'white' }}>RM {price}</span>
                            ) : (
                                <Link to="/signin" style={{ backgroundColor: 'white' }}>RM Login to view</Link>
                            )
                        }
                    </Card.Text>
                    <Card.Text>
                        {
                            userInfo ? (
                                <Link to={`/product/${productId}`} >
                                    <Button variant="dark" className="btn1-prod">
                                        View
                                    </Button>
                                </Link>
                            ) : (
                                <Link to="/signin" >
                                    <Button variant="dark" className="btn1-prod">
                                        Login to View
                                    </Button>
                                </Link>
                            )
                        }
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default Product
