import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'

const Product = () => {
    return (
        <div>
            <Card className="shadow card-prod" >
                <a href="">
                    <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                    width="100%" height="300" alt="product name" />
                </a>
                <a href="">
                    <p>NAMA</p>
                </a>
                <p>RM HARGA</p>
                <Link to={`/product/${1111}`}>
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
