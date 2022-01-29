import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ title }) => {
  //const [ categories, setCategories ] = useState('All')

  const category = useSelector( store => store.books.category)

  return (
    <header>
        <div className="container">
            <div className="content">
                <h1>{title}</h1>
                <p
                  >Categorías:
                  <span>
                    {
                      category === "all"
                        ? "Todas"
                        : category
                    }
                  </span>
                </p>
            </div>
        </div>
    </header>
  )
};

export default Header;
