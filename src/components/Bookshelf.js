import React from 'react';
import PropTypes from 'prop-types';
// importing app components
import Book from './Book';

/**
 * @description Bookshelf element, displaying all the books from the current shelf category
 * @constructor
 * @param {Object} props - All the props that were defined by the caller of this component.
 * @param {Object[]} props.books - List of books from the current shelf.
 * @param {string} props.title - The title of the current shelf.
 * @param {onUpdateBook} props.onUpdateBook - The callback executed when a book is updated.
 * @param {onUpdateRating} props.onUpdateRating - The callback executed when a rating is updated.
 */
const Bookshelf = (props) => {
  const {
    title, books, onUpdateBook, onUpdateRating,
  } = props;
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
                averageRating={book.averageRating ? book.averageRating : 0}
                ratingsCount={book.ratingsCount ? book.ratingsCount : 0}
                onUpdateBook={onUpdateBook}
                onUpdateRating={newRating => onUpdateRating(newRating, book)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

// Type checking the props of the component
Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  // using .arrayOf because airbnb linter forbiddens .array, recommending this one
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onUpdateRating: PropTypes.func.isRequired,
};

export default Bookshelf;
