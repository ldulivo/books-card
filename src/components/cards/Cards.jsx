import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getBookId } from '../../redux/bookDucks';
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
                            <li key={book.ID} onClick={() => dispatch( getBookId(book) ) }>
                                <Link to="/book">
                                    <article>
                                        <header>
                                            <img src={book.cover} alt={book.title} />
                                        </header>
                                        <footer>
                                            <p>{book.pages}</p>
                                            <p>{book.language}</p>
                                            <p>{book.publisher_date}</p>
                                        </footer>
                                    </article>

                                </Link>
                            </li>
                        ))
                    }
                </ul>
          }
      </div>
  );
};

export default Cards;
