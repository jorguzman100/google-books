import React from 'react';

// Components
import CarouselC from '../../components/CarouselC';
import BookSearch from '../../components/BookSearch';
import Results from '../../components/Results';


const Search = () => {
    return (
        <div className='px-5'>
            <CarouselC />
            <BookSearch />
            <Results />
        </div>
    );
}

export default Search;