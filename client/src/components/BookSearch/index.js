import React from 'react';
import { Card, Form, FormControl, Button } from 'react-bootstrap';
import './BookSearch.css'

const BookSearch = () => {

    return (
            <Card className='my-4'>
                <Card.Header className='py-1'>Book Search</Card.Header>
                <Card.Body>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Card.Body>
            </Card>
    );
}

export default BookSearch;