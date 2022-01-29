import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getBooks, emptiesBooks } from '../../redux/bookDucks';

/* Arrow icon */
import arrowLeft from './img/left.svg';
import arrowRight from './img/right.svg';

const Pagination = () => {

  const dispatch = useDispatch();
  let category = useSelector( store => store.books.category )
  let amount_per_page = useSelector( store => store.books.amount_per_page )
  let page_star = useSelector( store => store.books.page_star )

  const nextPage = () => {
    page_star = page_star + amount_per_page;
    getPage()
  }

  const prevPage = () => {
    page_star = page_star - amount_per_page;
    if ( page_star <= -1 ) {
      page_star = 0;
    }
    getPage()
  }

  const getPage = () => {

    dispatch( emptiesBooks() )
    dispatch( getBooks( {category, page_star, amount_per_page} ) )
  }

  const optionSelect = () => {
    const option = document.getElementById("selectPagination");
    console.log(`option: ${option.value} - page: ${amount_per_page}`);
    amount_per_page = option.value;
    getPage()
  }

  return (
    <div className='pagination'>
      <button onClick={() => prevPage()} disabled={page_star === 0} >
        <img src={arrowLeft} alt='arrow left' />
      </button>

      <select name="" id="selectPagination" onChange={() => optionSelect()}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>

      <button onClick={() => nextPage()}>
        <img src={arrowRight} alt='arrow right' />
      </button>
    </div>
  );
};

export default Pagination;
