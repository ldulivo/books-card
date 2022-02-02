import React from 'react';

import linkedin from './img/linkedin.svg';
import github from './img/github.svg'

const Footer = () => {
  return (
    <footer>
        <div className="waves">
            <div className="wave" id='wave1'></div>
            <div className="wave" id='wave2'></div>
            <div className="wave" id='wave3'></div>
            <div className="wave" id='wave4'></div>
        </div>
        <ul>
            <li>
                <a href="https://github.com/ldulivo" target="_blank" rel="noopener noreferrer">
                    <img className='img_footer' src={linkedin} alt="linkedin" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ldulivo/" target="_blank" rel="noopener noreferrer">
                    <img className='img_footer' src={github} alt="github" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a className='menu' href="https://openlibra.com/es/page/public-api" target="_blank" rel="noopener noreferrer">OpenLibra API Públic</a>
            </li>
        </ul>
    </footer>
  );
};

export default Footer;
