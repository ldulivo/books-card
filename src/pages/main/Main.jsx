import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks, emptiesBooks, resetPages } from '../../redux/bookDucks';

import Cards from '../../components/cards/Cards';
import Spinner from '../../components/spinner/Spinner';
import Pagination from '../../components/pagination/Pagination';

const Main = () => {
    const useLocationState = useLocation().state;
    let resetCountPage = false;
    if ( useLocationState != null ) {
        resetCountPage = useLocationState.resetCountPage;
    }

    /* Redux */
    const dispatch = useDispatch();
    const allBooks = useSelector( store => store.books.books );

    /* Get params URL */
    let params = useParams();
    let category;
    (params.category !== undefined) ? category = params.category : category = 0

    useEffect(() => {
        dispatch( getBooks( {category} ) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if ( resetCountPage ) {
            dispatch( resetPages() )
        }
        dispatch( emptiesBooks() )
        dispatch( getBooks( {category} ) )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category]);

  return (
    <div>
        <Pagination />
        {
            allBooks.length === 0
                ? <Spinner />
                : <Cards allBooks={allBooks} />
        }
    </div>
  );
};

export default Main;
