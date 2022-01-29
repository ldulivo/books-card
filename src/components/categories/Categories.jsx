import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../../redux/bookDucks';
import Spinner from '../spinner/Spinner';

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector( store => store.books.categories )

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
                    <Link to="/" state={{resetCountPage: true}} >
                        <li className='all__categories' >
                            Todas las Categorías
                        </li>
                    </Link>
                    {
                        categories.length === 0
                            ? <div className='categories_spinner'> <Spinner /> </div>
                            : categories.map( category => (
                                
                                <Link 
                                    key={category.category_id} 
                                    to={`/${category.name}`} 
                                    state={{resetCountPage: true}} 
                                >
                                    <li >
                                        {category.name}
                                    </li>
                                </Link>
                                
                                ))
                    }
                    
                </ul>

            
        </div>
    </div>
  );
};

export default Categories;
