import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // using instanceOf because airbnb linter forbiddens .object
  imageLinks: PropTypes.instanceOf(Object).isRequired,
  shelf: PropTypes.string.isRequired,
  // using .arrayOf because airbnb linter forbiddens .array
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Books;
