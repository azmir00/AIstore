import React from 'react'
import {Carousel} from 'react-bootstrap'
import g1 from '../images/g1.jpg'
import g2 from '../images/g2.jpg'
import g3 from '../images/g3.jpg'

function ImageSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g3}
                    height='700'
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g2}
                    height='700'
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={g1}
                    height='700'
                    alt="Third slide"
                />

                <Carousel.Caption>
                    {/* <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider
