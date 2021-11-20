import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

export default function SigninScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Row className="bg-signin">
            <Col md={8} >
            </Col>

            <Col md={4} >
                <Card className="card-login rounded shadow" >
                    <Card.Body>
                        <Card.Title><h1 className="title-signin">Sign In</h1></Card.Title>
                        <Card.Text className="mt-5">
                            <Form action="" className="form" onSubmit={submitHandler}>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" size="md">Sign In</Button>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </div>
    )
}
