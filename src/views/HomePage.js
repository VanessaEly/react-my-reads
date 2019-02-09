import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from '../components/Bookshelf';

const HomePage = (props) => {
  const shelfs = [
    { name: 'currentlyReading', title: 'Currently Reading' },
    { name: 'wantToRead', title: 'Want to Read' },
    { name: 'read', title: 'Read' },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfs.map(shelf => (
            <Bookshelf
              key={shelf.name}
              title={shelf.title}
              books={props.books.filter(book => book.shelf === shelf.name)}
              onUpdateBook={props.onUpdateBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  // using .arrayOf because airbnb linter forbiddens .array, recommending this one
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default HomePage;
