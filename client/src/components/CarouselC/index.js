import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselC.css'


const CarouselC = () => {
    return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={process.env.PUBLIC_URL + '/images/carousel1.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={process.env.PUBLIC_URL + '/images/carousel2.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Search for your favourite books...</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={process.env.PUBLIC_URL + '/images/carousel3.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Read or Save for later!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default CarouselC;