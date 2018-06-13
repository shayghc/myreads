import React from "react"
import * as BooksAPI from "./BooksAPI"
import BookCase from "./BookCase"
import BookSearch from './Booksearch'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./App.css"

class BooksApp extends React.Component {
    state = {
        // Holds the books already in the bookcase
        books: [],
        shelves: [
            {
                shelfId: "current",
                shelfName: "currentlyReading"
            }, {
                shelfId: "wanted",
                shelfName: "wantToRead"
            }, {
                shelfId: "read",
                shelfName: "read"
            }
        ],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
    };

    componentDidMount() {
        // Build a library of books already in the bookcase
        // Provides the contents for the 'books' array in state
        BooksAPI.getAll().then(books => {
            this.setState({books});
        });
    }

    shelfSelect = (bookToUpdate, shelf) => {
        console.log("Book: ", bookToUpdate, " Shelf: ", shelf); // For testing only - event listener not passing 'currentlyReading' shelf
        BooksAPI.update(bookToUpdate, shelf).then(response => {
            // Update the shelf for this book
            bookToUpdate.shelf = shelf;

            // get array of books to use with setState
            let updatedBooks = this.state.books.filter(book => book.id !== bookToUpdate.id);

            // add book to array and update state
            updatedBooks.push(bookToUpdate);
            this.setState({books: updatedBooks});
        });
    };

    render() {
        console.log("State in app.js ", this.state);
        return (<div className="app">
                    
                    : (<div className="list-books">
                        <header className="list-books-title">
                            <h1>MyReads</h1>
                        </header>
                        <div className="list-books-content">
                            <BookCase
                                books={this.state.books}
                                shelves={this.state.shelves}
                                shelfSelect={this.shelfSelect}
                            />
                        </div>
                        <Link
                            to="/add-a-book"
                            className="open-search">Add a book
                        </Link>
                    </div>)
            }
        </div>);
    }
}

export default BooksApp;
