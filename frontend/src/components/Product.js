import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

const Product = ({imageUrl, name, price, productId}) => {
    return (
        <div>
            <Card className="shadow card-prod" >
                <a href="">
                    <img src={imageUrl} 
                    width="100%" height="300" alt={name} />
                </a>
                <a href="">
                    <p>{name}</p>
                </a>
                <p>RM {price}</p>
                <Link to={`/product/${productId}`}>
                    <Button variant="outline-dark" className="mb-2">
                        View
                    </Button>
                </Link>
                <Button variant="outline-primary">
                    Add to Cart
                </Button>

            </Card>
        </div>
    )
}

export default Product
