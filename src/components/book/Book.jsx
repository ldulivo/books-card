import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {
    const book = useSelector( store => store.books.onBook)
    console.log(book);
  return (
    <article className='book'>
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
    </article>
  );
};

export default Book;
