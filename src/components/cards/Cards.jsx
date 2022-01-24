import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/bookDucks';
import Spinner from '../spinner/Spinner';


const Cards = () => {

    const dispatch = useDispatch();
    const allBooks = useSelector( store => store.books.books );
    const info = useSelector( store => store.books )
    console.log('allBooks', allBooks);
    console.log(('info', info));

    useEffect(() => {
        dispatch( getBooks() )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
  return (
      <div className='cards'>
          {
              allBooks.length === 0
                ? <Spinner />
                :<ul>
                    {
                        allBooks.map( book => (
                            <li key={book.ID}>{book.title}</li>
                        ))
                    }
                </ul>
          }
      </div>
  );
};

export default Cards;
