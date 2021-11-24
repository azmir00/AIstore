import React, { useState, useEffect } from "react";
import NavBarLogin from "../components/NavBarLogin";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import axios from "axios";
// import NavBarLogin from "../components/NavBarLogin";
import { Link, useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password does not match =(");
    } else {
      setMessage(null);

      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "/api/users",
          { name, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
        history.push("/signin");
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push("/signin");
  //   }
  // }, [history, userInfo]);

  return (
    <div>
      <NavBarLogin />

      <Row className="bg-signin no-gutters">
        <Col md={8}></Col>

        <Col md={4}>
          <Card className="card-register rounded shadow">
            <Card.Body>
              <Card.Title>
                <h1 className="title-register">Register</h1>
              </Card.Title>
              <Card.Text className="mt-5">
                <Form action="" className="form" onSubmit={submitHandler}>
                  {error && (
                    <ErrorMessage variant="danger">{error}</ErrorMessage>
                  )}
                  {message && (
                    <ErrorMessage variant="danger">{message}</ErrorMessage>
                  )}
                  {loading && <Loading />}
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      value={name}
                      placeholder="Enter name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

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

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={confirmPassword}
                      placeholder="Confirm password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="btn-register">
                    <Button variant="primary" size="md" type="submit">
                      Sign Up
                    </Button>
                  </div>

                  <div className="d-grid gap-2 mt-2">
                    Already have an account?
                    {/* <Link to={`/signin?redirect=${redirect}`}> Sign in </Link> */}
                    <Link to="/signin"> Sign in </Link>
                    instead
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

// const redirect = props.location.search
//   ? props.location.search.split("=")[1]
//   : "/signin";

// const userRegister = useSelector((state) => state.Register);
// const { loading, error, userInfo } = userRegister;

// const dispatch = useDispatch();

// const submitRegister = () => {
//   const userInfo = localStorage.setItem("userInfo");

//   if (userInfo) {
//     history.push("/");
//   }
// };
