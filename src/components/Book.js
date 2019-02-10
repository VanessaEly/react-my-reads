import React from 'react';
import PropTypes from 'prop-types';
import BookRating from './BookRating';

/**
 * @description Book component, used to display book details
 * @constructor
 * @param {string} props.id - The id of the book.
 * @param {string} props.title - The title of the book.
 * @param {Object} props.imageLinks - Object that contains the urls of the book cover image.
 * @param {string} [props.shelf=none] - The book's shelf category.
 * @param {Object[]} [props.authors=[]] - The authors of the book.
 * @param {onUpdateBook} props.onUpdateBook - The callback executed when a book needs to be updated.
 * @param {number} [props.averageRating=0] - The average value of the book ratings.
 * @param {number} [props.ratingsCount=0] - The total number of book ratings.
 */
const Books = (props) => {
  const {
    id, title, imageLinks, shelf, authors, onUpdateBook,
  } = props;
  return (
    <div id={id} className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }} />
        <div className="book-shelf-changer">
          <select value={shelf} onChange={event => onUpdateBook(props, event.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-rating-container">
				<BookRating
					value={props.averageRating}
					count={props.ratingsCount}
				/>
			</div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

// Assign default values to the optional props
Books.defaultProps = {
  authors: [],
  shelf: 'none',
  averageRating: 0,
  ratingsCount: 0,
};

// Type checking the props of the component
Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // using instanceOf because airbnb linter forbiddens .object
  imageLinks: PropTypes.instanceOf(Object).isRequired,
  shelf: PropTypes.string,
  // using .arrayOf because airbnb linter forbiddens .array
  authors: PropTypes.arrayOf(PropTypes.string),
  onUpdateBook: PropTypes.func.isRequired,
  averageRating: PropTypes.number,
  ratingsCount: PropTypes.number,
};

export default Books;
