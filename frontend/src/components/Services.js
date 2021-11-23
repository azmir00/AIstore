import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import shield from '../svg/shield-alt-solid.svg'
import tags from '../svg/tags-solid.svg'
import truck from '../svg/truck-solid.svg'
import money from '../svg/money-bill-alt-regular.svg'

const Services = () => {
    return (
        <div className="container-fluid">
            <Row className="row-services">
                <Col className="col-services">
                <img src={truck} alt="" width="100" />
                <h4>Fast, Free shipping</h4>
                </Col>
                <Col className="col-services">
                <img src={tags} alt="" width="100" />
                <h4>Up to 20% off</h4>
                </Col>
                <Col className="col-services">
                <img src={money} alt="" width="100" />
                <h4>Money back guarantee</h4>
                </Col>
                <Col className="col-services">
                <img src={shield} alt="" width="80" />
                <h4>Quality check</h4>
                </Col>
            </Row>
        </div>
    )
}

export default Services
