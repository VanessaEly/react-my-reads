import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

// Importing app utils
import * as BooksAPI from './utils/BooksAPI';

// Importing app views
import SearchBooks from './views/SearchBooksPage';
import HomePage from './views/HomePage';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    /**
     * @typedef {Object} ComponentState
     * @property {Object[]} books - All books from the app
     */

    /** @type {ComponentState} */
    this.state = { books: [] };
  }

  /**
   * componentDidMount is a lifecycle event handler
   * that is called just after the App loads into the DOM.
   * Here, it is used call the API to get all the books
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => (this.setState(() => ({ books }))));
  }

  /**
   * Change a books shelf or Adds it to the Library in a shelf
   * @param {string} id
   * @param {string} shelf
   */
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // updating book list, using spread operator to concat
      // the filtered list without the updated book
      // with the new book, which has its shelf updated using spread operator too
      this.setState(prevState => ({
        books: [...prevState.books.filter(key => (key.id !== book.id)), { ...book, shelf }],
      }));
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route path="/search" render={() => (<SearchBooks books={books} onUpdateBook={this.updateBook} />)} />
        <Route exact path="/" render={() => (<HomePage books={books} onUpdateBook={this.updateBook} />)} />
      </div>
    );
  }
}

export default BooksApp;
