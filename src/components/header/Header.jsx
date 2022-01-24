import React from 'react';

const Header = ({title}) => {

  return (
    <header>
        <div className="container">
            <div className="content">
                <h1>{title}</h1>
                <p>This project look the books</p>
            </div>
        </div>
    </header>
  )
};

export default Header;
