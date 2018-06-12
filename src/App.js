import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookCase from './BookCase'
import './App.css'

class BooksApp extends React.Component {
    state = {
        // Holds the books already in the bookcase
        books: [],
        shelves: [
            {
                shelfId: 'current',
                shelfName: 'currentlyReading'
            },
            {
                shelfId: 'wanted',
                shelfName: 'wantToRead'
            },
            {
                shelfId: 'read',
                shelfName: 'read'
            }
        ],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }

    componentDidMount() {
        // Build a library of books already in the bookcase
        // Provides the contents for the 'books' array in state
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
    }

    shelfSelect(book, shelf) {
        console.log('Props', this.props)
        console.log ('Book ', book, ' Shelf ', shelf)
    }

    render() {
        return (<div className="app">
            {
                this.state.showSearchPage
                    ? (<div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({showSearchPage: false})}>Close</a>
                            <div className="search-books-input-wrapper">
                                {/*
                                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                  You can find these search terms here:
                                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                  you don't find a specific author or title. Every search is limited by search terms.
                                */
                                }
                                <input type="text" placeholder="Search by title or author"/>

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>)
                    : (<div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                                <BookCase books={ this.state.books } shelves={ this.state.shelves} shelfSelect={ this.shelfSelect }/>
                        </div>
                        <div className="open-search">
                            <a onClick={() => this.setState({showSearchPage: true})}>Add a book</a>
                        </div>
                    </div>)
            }
            </div>)
    }
}

export default BooksApp
