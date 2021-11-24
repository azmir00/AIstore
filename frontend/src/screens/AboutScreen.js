import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import TopNavbar from "../components/TopNavbar";
import Footer from "../components/Footer";
import picabout from "../images/about-us.jpg"
import ailogo from "../images/ai-store-logo.png"
import azmir from "../images/azmir.jpg"
import irfan from "../images/irfan.jpeg"

const AboutScreen = () => {
  return (
    <div>
      <TopNavbar />

      <div className="pic-about">
        <img src={picabout} alt="about us" />
      </div>

      <div className="about-ai">
        <Row className="no-gutters">
          <Col>
            <div className="about-desc">
              <p>&diams; A one-stop-centre e-commerce platform for past, future & upcoming tech products.</p>
              <p>&diams; A must open diary for shoppers and sellers to exchange their best experiences and quality of gadgets, computers, and machinery.</p>
            </div>
          </Col>
          <Col>
            <div>
              <img src={ailogo} alt="AI store logo" />
            </div>
          </Col>
        </Row>
      </div>

      <div className="about-team">
        <div className="ab-t1 d-flex align-items-center">
          <div className="v2"></div>
          &emsp;
          <h1>Meet Our <span style={{ color: '#ffcb65' }}>Team</span></h1>
        </div>

        <div className="team-pic d-flex align-items-center">
          <div className="team-person">
          <Image src={azmir} width="250" height="300" rounded />
          <h2>Azmir</h2>
          <p>Front-end Developer</p>
          <p>"Progression is better than perfection"</p>
          </div>
          <div className="team-person">
          <Image src={irfan} width="250" height="300" rounded />
          <h2>Irfan</h2>
          <p>Back-end Developer</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutScreen;
