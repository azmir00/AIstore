import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import NavBarLogin from "../components/NavBarLogin";
// import { Link } from "react-router-dom";
import signin from "../redux/actions/UserActions";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div>
      {/* <NavBarLogin /> */}
      <Row className="bg-signin">
        <Col md={8}></Col>

        <Col md={4}>
          <Card className="card-login rounded shadow">
            <Card.Body>
              <Card.Title>
                <h1 className="title-signin">Sign In</h1>
              </Card.Title>
              <Card.Text className="mt-5">
                <Form action="" className="form" onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="primary" size="md" type="submit">
                      Sign In
                    </Button>
                  </div>

                  {/* <div className="d-grid gap-2">
                    New customer ?
                    <Link to="/register">Create your account</Link>
                  </div> */}
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
