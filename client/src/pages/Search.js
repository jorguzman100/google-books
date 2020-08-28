import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import CarouselC from '../components/CarouselC';
import BookSearch from '../components/BookSearch';
import Results from '../components/Results';


const Search = () => {
    return (
        <Container>
            <CarouselC />
            <BookSearch />
            <Results />
        </Container>
    );
}

export default Search;