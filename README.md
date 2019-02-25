## MyReads
**MYREADS** is the first project from the **Udacity's React Developer Nanodegree** program. You'll create a bookshelf application that allows you to select and sort books you've read, are reading or want to read.


## Table of contents

 - [How to install](#how-to-install)
 - [How to run](#how-to-run)
 - [How it works](#how-it-works)
	 - [Home Page](#home-page)
	 - [Search Books Page](#search-books-page)
- [Backend Server](#backend-server)
	 - [getAll()](#getall)
	 - [update()](#update)
	 - [search()](#search)
## How to install
To clone and run this application, you'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm]) installed on your computer. From your command line, type:

```bash
# Clone this repository
$ git clone https://github.com/VanessaEly/react-my-reads.git

# Go into the repository
$ cd react-my-reads

# Install dependencies
$ npm install
```
[(Back to top)](#myreads)

## How to run
Be sure to have the dependencies installed before, using npm install command.
The application runs on ```http://localhost:3000``` as default.
To be able to run the application, run the following command in your terminal:

```bash
# Script used to run this application
npm start
```

## How it works

This project has two pages: Home and Search Books.

### Home Page
This page can be accessed through **/** path.
It shows the user's bookshelf, containing three shelfs: Currently Reading, Want to Read and Read. Each book in this bookshelf has its own details displayed, including it's name, cover, author and ratings. By clicking it's rating stars, a user is able to rate a book. A dropdown button also allows the user to change the book's shelf.
In the page's bottom right, there's a button to redirect the user to the [Search Books Page](#search-books-page), were he will be able to add new books to the bookshelf.

### Search Books Page
This page can be accessed through **/search** path.

On the header of this page, user can:

 - **Go back** to the [Home Page](#home-page) using the arrow **(<-)** button
 - Search for books using the input field

If the search doesn't find any book, a message of **no books were found** is shown. If the search finds, it will show a list of books that have the same set of information and functionality from the books on the [Search Books Page](#search-books-page).

[(Back to top)](#myreads)

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

[(Back to top)](#myreads)
