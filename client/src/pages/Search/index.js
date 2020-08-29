import React from 'react';

// Components
import BookSearch from '../../components/BookSearch';
import Results from '../../components/Results';


const Search = () => {
    return (
        <div className='px-5'>
            <BookSearch />
            <Results />
        </div>
    );
}

export default Search;