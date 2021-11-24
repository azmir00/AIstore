import React from "react";
import "./ContactScreen.css";
import { Col, Form, Row, Button } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import piccontact from "../images/contact-us.png";

const ContactScreen = () => {
  return (
    <div>
      <TopNavbar />

      <div className="pic-contact">
        <img src={piccontact} alt="contact us" />
      </div>

      <div className="contact">
        <h3 style={{color: '#ffcb65'}}>Get In Touch</h3>
        <br />
        <div>
          <Row className="no-gutters">
              <Col md={6}>
              <div className="form-contact">
                <Form>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>

                  <Form.Group controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                  </Form.Group>
                  <br />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                </div>
              </Col>

              <Col md={6}>
                <div className="add-contact">
                  <h4 style={{color: '#ffcb65'}}>Address</h4>
                  <p>Tingkat 11,
                    Suria KLCC, Kuala Lumpur City Centre,
                    50088 Kuala Lumpur,
                    Wilayah Persekutuan Kuala Lumpur.</p>
                </div>
              </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactScreen;
