import React from 'react';
import { Container, Card, } from 'react-bootstrap';

const Results = () => {

    return (
        <Container>
            <Card>
                <Card.Header className='py-1'>Results</Card.Header>
                <Card.Body>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        </Container>
    );

}

export default Results;