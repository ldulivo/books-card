import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import fileDownload from './img/file_download_black_24dp.svg'

const Book = () => {

    const url = useLocation().state.url;
    const book = useSelector( store => store.books.onBook)
  return (
    <article className='book'>
        <Link to={url} state={{resetCountPage: false}} >
            <div className="back_to_root">Back</div>
        </Link>
        <header>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <img src={book.cover} alt={book.title} />
            
            <aside>
                <h3>Details</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Pages</th>
                            <td>{book.pages}</td>
                        </tr>
                        <tr>
                            <th>Language</th>
                            <td>{book.language}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{book.publisher_date}</td>
                        </tr>
                    </tbody>
                </table>
            </aside>

            <section>
                <h3>Extraer</h3>
                <p>{book.content_short}</p>
            </section>
            
        </header>
        <main>
            <h3>Content</h3>
            <p>{book.content}</p>
        </main>
        <footer>
            <p>Contenido disponible para descargar en su web oficial</p>
            <a href={book.url_download} target="_blank" rel="noopener noreferrer" >
                <img src={fileDownload} alt="" />
            </a>
        </footer>
    </article>
  );
};

export default Book;
