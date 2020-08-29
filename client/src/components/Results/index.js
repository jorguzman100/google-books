import React from 'react';
import { Card } from 'react-bootstrap';
import './Results.css';

// Components
import BookCard from '../BookCard.js';

const Results = ({ title }) => {

    return (
            <Card className='my-4'>
            <Card.Header className='py-1'>{title}</Card.Header>
                <Card.Body className='p-2'>
                    <BookCard />
                </Card.Body>
            </Card>
    );

}

export default Results;