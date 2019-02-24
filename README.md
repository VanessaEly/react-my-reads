## MyReads
**MYREADS** is the first project from the **Udacity's React Developer Nanodegree** program. You'll create a bookshelf application that allows you to select and sort books you've read, are reading or want to read.


## Table of contents

 - [How to install](#how-to-install)
 - [How to run](#how-to-run)
 - [How it works](#how-it-works)
	 - [Home Page](#home-page)
	 - [Search Books Page](#search-books-page)

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
