import React from "react"
import * as BooksAPI from "./BooksAPI"
import BookCase from "./BookCase"
import BookSearch from './BookSearch'
import {Route} from 'react-router-dom'
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
        ]
    }

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
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BookCase
                        books={this.state.books}
                        shelves={this.state.shelves}
                        shelfSelect={this.shelfSelect}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp;
