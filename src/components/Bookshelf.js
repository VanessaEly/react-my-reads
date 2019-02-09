import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Bookshelf = (props) => {
  const { title, books, onUpdateBook } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book
                id={book.id}
                title={book.title}
                imageLinks={book.imageLinks}
                shelf={book.shelf}
                authors={book.authors}
                onUpdateBook={onUpdateBook}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  // using .arrayOf because airbnb linter forbiddens .array, recommending this one
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Bookshelf;
