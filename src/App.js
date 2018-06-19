/*
 * @fileOverview React JS for MyReads project of the Udacity FEWD Nanodegree course.
 * @author <a href+"mailto:sghconnolly@gmail.com">Seamus Connolly</a>
 *
 * TODO:
 * Bugs:
 * Rapid deletion of the search bar does not clear the books from the search page
 *
 */

import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookCase from "./BookCase";
import BookSearch from "./BookSearch";
import { Route } from "react-router-dom";
import "./App.css";

/** BooksApp class
 * @class [BooksApp]
 * @description This function is the main file for displaying the various states for the app
 */
class BooksApp extends React.Component {
    state = {
        // Holds the books already in the bookcase
        books: [],
        shelves: [
            {
                shelfId: "current",
                shelfName: "currentlyReading"
            },
            {
                shelfId: "wanted",
                shelfName: "wantToRead"
            },
            {
                shelfId: "read",
                shelfName: "read"
            }
        ]
    };

    componentDidMount() {
        // Build a library of books already in the bookcase
        // Provides the contents for the 'books' array in state
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }

    /** shelfSelect class
     * @function [shelfSelect]
     * @description This function is passed to other components to allow the 'shelf' state to be modified
     * @param {string} bookToUpdate. This parameter identifies the book whose shelf value is to be modified
     * @param {string} shelf. This parameter identifies the shelf name to be assigned
     */
    shelfSelect = (bookToUpdate, shelf) => {
        BooksAPI.update(bookToUpdate, shelf).then(response => {
            // Update the shelf for this book
            bookToUpdate.shelf = shelf;

            // get array of books to use with setState
            let updatedBooks = this.state.books.filter(
                book => book.id !== bookToUpdate.id
            );

            // add book to array and update state
            updatedBooks.push(bookToUpdate);
            this.setState({ books: updatedBooks });
        });
    };

    render() {
        return (
            <div className="app">
                <Route
                    exact
                    path="/"
                    render={() => (
                        <BookCase
                            books={this.state.books}
                            shelves={this.state.shelves}
                            shelfSelect={this.shelfSelect}
                        />
                    )}
                />
                <Route
                    path="/booksearch"
                    render={({ history }) => (
                        <BookSearch
                            books={this.state.books}
                            shelves={this.state.shelves}
                            shelfSelect={this.shelfSelect}
                        />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;
