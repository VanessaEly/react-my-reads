import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// importing app components
import Book from '../components/Book';
// importing app utils
import * as BooksAPI from '../utils/BooksAPI';

/**
 * @description Search Books Page, where you're allowed to search for books and add them to a shelf
 * @constructor
 * @param {Object} props - All the props that were defined by the caller of this component.
 * @param {Object[]} props.books - List of all the books on the app.
 * @param {onUpdateBook} props.onUpdateBook - The callback executed when a book needs to be updated.
 */
class SearchBooksPage extends Component {
  constructor() {
    super();
    /**
     * @typedef {Object} ComponentState
     * @property {String} query - Value of the current search input, user to query books
     * @property {Object[]} filteredBooks - All books resulted from the current search query
     */

    /** @type {ComponentState} */
    this.state = {
      filteredBooks: [],
    };
  }

  /**
   * Update the query to hit the api with, search the
   * api with that query and set the state of the page
   * @param {string} query string request to hit api with
   */
  updateQuery = (query) => {
    const { books } = this.props;
    // if query value is empty, don't search
    if (query.trim() === '') return;
    BooksAPI.search(query, 10).then((response) => {
      // if a book was found, update state
      if (response && response.length) {
        // Search query doens't return the current book's shelf, so we need to compare
        // all books in the main page with the books returned from search to update their shelf
        response.map(book => (
          books.filter(b => b.id === book.id)
            .forEach((b) => { book.shelf = b.shelf; }) // eslint-disable-line no-param-reassign
        ));
        this.setState({ filteredBooks: response });
      }
    });
  };

  render() {
    const { onUpdateBook } = this.props;
    const { filteredBooks } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks.map(book => (
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
  }
}

// Type checking the props of the component
SearchBooksPage.propTypes = {
  // using .arrayOf because airbnb linter forbiddens .array, recommending this one
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default SearchBooksPage;
