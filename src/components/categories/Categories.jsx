import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../../redux/bookDucks';
import Spinner from '../spinner/Spinner';

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector( store => store.books.categories )
    console.log(categories);

    useEffect(() => {
        dispatch( getCategories() )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <div className='categories'>
        <input type="checkbox" name="categories" id="categories" />

        <div className="container">
            <label htmlFor="categories">
                <p></p>
            </label>
            <ul>
                {
                    categories.length === 0
                        ? <div className='categories_spinner'> <Spinner /> </div>
                        : categories.map( category => (
                                <li key={category.category_id}>{category.name}</li>
                            ))
                }
                
            </ul>
        </div>
    </div>
  );
};

export default Categories;