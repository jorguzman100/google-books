import React from 'react';
import { Container, Card, Form, FormControl, Button } from 'react-bootstrap';
import './BookSearch.css'

const BookSearch = () => {

    return (
        <Container className='my-4'>
            <Card>
                <Card.Header className='py-1'>Book Search</Card.Header>
                <Card.Body>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default BookSearch;