import React, { useState, useEffect } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import signin from "../redux/actions/UserActions";

export default function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "/";

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(signin(email, password));

    // call API@data
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/signin",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.getItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/");
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/");
  //     // localStorage.removeItem("userInfo");
  //   }
  // }, [history]);

  return (
    <div>
      {/* <NavBarLogin /> */}
      <Row className="bg-signin">
        <Col md={8}></Col>

        <Col md={4}>
          <Card className="card-signin rounded shadow">
            <Card.Body>
              <Card.Title>
                <h1 className="title-signin">Sign In</h1>
              </Card.Title>
              <Card.Text className="mt-5">
                <Form action="" className="form" onSubmit={submitHandler}>
                  {error && (
                    <ErrorMessage variant="danger">{error}</ErrorMessage>
                  )}
                  {loading && <Loading />}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Enter email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2 mt-2">
                    <Button
                      variant="primary"
                      size="md"
                      type="submit"
                      onClick={(email, password) => {
                        if (email && password) {
                          history.push("/");
                        }
                        // localStorage.getItem("userInfo");
                      }}
                    >
                      Sign In
                    </Button>
                  </div>

                  <div className="d-grid gap-2 mt-2">
                    New customer?
                    {/* <Link to={`/register?redirect=${redirect}`} /> */}
                    <Link to="/register"> Create account </Link>
                    with us
                  </div>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
