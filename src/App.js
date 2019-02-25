import React from 'react';
import { Route } from 'react-router-dom';
import sortBy from 'sort-by';
import './App.css';
// Importing app utils
import * as BooksAPI from './utils/BooksAPI';
// Importing app views
import SearchBooksPage from './views/SearchBooksPage';
import HomePage from './views/HomePage';
// Importing app components
import Loading from './components/Loading';

/**
 * @description Main Books App component.
 * @constructor
 * @param {Object} props - All the props that were defined by the caller of this component.
 */
class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    /**
     * @typedef {Object} ComponentState
     * @property {Object[]} books - All books from the app
     */

    /** @type {ComponentState} */
    this.state = { books: [], isLoading: false };
  }

  /**
   * componentDidMount is a lifecycle event handler
   * that is called just after the App loads into the DOM.
   * Here, it is used call the API to get all the books
   */
  componentDidMount() {
    this.setState({ isLoading: true });
    BooksAPI.getAll().then(books => (this.setState(() => ({ books: books.sort(sortBy('title')), isLoading: false }))));
  }

  /**
   * Update a book's rating based on clicks on its stars
   * @param {number} newRating - Star rating that was clicked and will be added to average.
   * @param {Object} book - Book that was clicked.
   */
  updateRating = (newRating, book) => {
    // calculating new average rating
    book.averageRating = book.averageRating
      ? ((book.averageRating * book.ratingsCount) + newRating) / (book.ratingsCount + 1)
      : newRating;
    // updating number of votes
    book.ratingsCount = book.ratingsCount ? book.ratingsCount + 1 : 1;
    this.setState(prevState => ({
      books: [...prevState.books.filter(key => (key.id !== book.id)), book].sort(sortBy('title')),
    }));
  };

  /**
   * Change or add a book's shelf
   * @param {Object} book - Book that will have it's shelf updated
   * @param {string} shelf - The book's new shelf
   */
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // updating book list, using spread operator to concat
      // the filtered list without the updated book
      // with the new book, which has its shelf updated using spread operator too
      this.setState(prevState => ({
        books: [...prevState.books.filter(key => (key.id !== book.id)), { ...book, shelf }].sort(sortBy('title')),
      }));
    });
  };

  render() {
    const { books, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <Loading /> : <div />}
        <div className="app content">
          <Route path="/search" render={() => (<SearchBooksPage books={books} onUpdateBook={this.updateBook} onUpdateRating={this.updateRating} />)} />
          <Route exact path="/" render={() => (<HomePage books={books} onUpdateBook={this.updateBook} onUpdateRating={this.updateRating} />)} />
        </div>
      </div>
    );
  }
}

export default BooksApp;
