import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

const Product = ({ imageUrl, name, price, productId }) => {
    return (
        <>
            <Card  >
                <Card.Img
                    src={imageUrl}
                    width="100%" height="300" alt={name} />
                <Card.ImgOverlay className="each-prod">
                    <Card.Title>
                        <span style={{backgroundColor: 'white'}}>{name}</span>
                    </Card.Title>
                    <Card.Text>
                        <span style={{backgroundColor: 'white'}}>RM {price}</span>
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/product/${productId}`} >
                            <Button variant="dark" className="btn1-prod">
                                View
                            </Button>
                        </Link>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    )
}

export default Product
