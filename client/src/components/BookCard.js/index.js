import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from "react-router-dom";


const BookCard = () => {

    const location = useLocation();

    return (
        <Card style={{ width: '100%' }}>
            <Card.Body className='p-2'>
                <Row>
                    <Col xs={9}>
                        <Card.Title className='mb-2'>Book Title</Card.Title>
                        <Card.Subtitle className="mb-0 text-muted">Book Subtitle</Card.Subtitle>
                        <p className="mb-1 text-muted">Written by: Authors</p>
                    </Col>
                    <Col xs={3} className='text-right'>
                        <Button className='py-1 px-2 mr-2' variant="outline-primary">View</Button>
                        {location.pathname === "/Search" ? 
                            <Button className='py-1 px-2' variant="outline-info">Save</Button> :
                            <Button className='py-1 px-2' variant="outline-danger">Delete</Button>}
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <img
                            className="d-block"
                            src={process.env.PUBLIC_URL + '/images/carousel1.jpg'}
                            alt="First slide"
                        />
                    </Col>
                    <Col xs={10}>
                        <Card.Text className='ml-3'>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                                    </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}


export default BookCard;