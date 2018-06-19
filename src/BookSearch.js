import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class BookSearch extends React.Component {
    state = {
        searchedBooks: [],
        query: ""
    };

    /** searchInput class
     * @function [searchInput]
     * @description This function validates that query has content and clears the searchedBooks state if not
     * @param {string} query. This parameter contains the search text string
     */
    searchInput = query => {
        this.setState({ query: query });
        if (query) {
            this.componentDidMount(this.state.query);
        } else if (query === '') {
            this.setState({ searchedBooks: [] });
        }
    };

    /** componentDidMount class
     * @function [componentDidMount]
     * @description This function passes the search query to the BooksAPI
     * @param {string} query. This parameter contains the search text string
     */
    componentDidMount(query) {
        // Build a library of books already in the bookcase
        // Provides the contents for the 'books' array in state
        BooksAPI.search(query).then(response => {
            // If the API returns a response to the query
            if (response) {
                this.checkInput(response);
            }
            if (response && response.error) {
                // In the event of an API response error, void the searchedBooks array
                this.setState({ searchedBooks: [] });
            }
        });
    }

    /** checkInput class
     * @function [checkInput]
     * @description This function checks that books already in the bookcase have the correct shelf assigned when viewed in the search page, then sets that state of the searchedBooks array
     * @param {object} query. This parameter contains the BooksAPI search response object
     */
    checkInput = query => {
        // For each book in the response...
        query.map(book =>
            // Check to see if the book is already in the bookcase
            this.props.books.map(
                bookcheck =>
                    // If so, set the query book to the same shelf as the book already in the bookcase
                    bookcheck.id === book.id && (book.shelf = bookcheck.shelf)
            )
        );
        // After all books are checked, set the searchedBooks array
        this.setState({ searchedBooks: query });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link exact="exact" to="/" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={event =>
                                this.searchInput(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    shelfSelect={this.props.shelfSelect}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;
