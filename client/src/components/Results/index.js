import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Results = () => {

    return (
            <Card>
                <Card.Header className='py-1'>Results</Card.Header>
                <Card.Body>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>Book Title</Card.Title>
                                    <Card.Subtitle className="mb-0 text-muted">Book Subtitle</Card.Subtitle>
                                    <p className="mb-1 text-muted">Written by: Authors</p>
                                </Col>
                                <Col>
                                    <Button variant="outline-primary">View</Button>
                                    <Button variant="outline-info">Save</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img
                                        className="d-block w-100"
                                        src={process.env.PUBLIC_URL + '/images/carousel1.jpg'}
                                        alt="First slide"
                                    />
                                </Col>
                                <Col>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                            </Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
    );

}

export default Results;