import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = ({ title }) => {

  const category = useSelector( store => store.books.category)
  const categories = useSelector( store => store.books.categories)
  const [ categoryName, setCategoryName ] = useState("Todas");

  useEffect(() => {
    categories.map( item => (item.category_id === parseInt(category)) && setCategoryName(item.name) )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <header>
        <div className="container">
            <div className="content">
                <h1>{title}</h1>
                <p
                  >Categorías:
                  <span>
                    {
                      category === 0
                        ? "Todas"
                        : categoryName
                    }
                  </span>
                </p>
            </div>
        </div>
    </header>
  )
};

export default Header;
