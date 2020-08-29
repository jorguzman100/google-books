import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

// Components
import BookCard from '../BookCard.js';

const Results = ({ title }) => {

    let location = useLocation();

    return (
            <Card className='my-4'>
            <Card.Header className={`py-1 alert alert-${location.pathname === '/Save' ? 'info' : 'primary'}`}>{title}</Card.Header>
                <Card.Body className='p-2'>
                    <BookCard />
                </Card.Body>
            </Card>
    );

}

export default Results;