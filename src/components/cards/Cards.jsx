import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBookId } from '../../redux/bookDucks';
import Spinner from '../spinner/Spinner';


const Cards = ({ allBooks }) => {

    const url = useLocation().pathname;
    const dispatch = useDispatch();
    
  return (
      <div className='cards'>
          {
              allBooks.length === 0
                ? <Spinner />
                :<ul>
                    {
                        allBooks.map( book => (
                            <li key={book.ID} onClick={() => dispatch( getBookId(book) ) }>
                                <Link to="/book" state={ {url} } >
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
