import React from 'react'
import {Link} from 'react-router-dom'
import BooksAPI from './BooksAPI'

class BookSearch extends React.Component {
    state = {
        books: [],
        query: ''
    }

    searchInput = (event) => {
        this.setState({ query: event.target.value })
    }

    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link exact="exact" to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        onChange={ this.searchInput }
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">

                </ol>
            </div>
        </div>)
    }
}

export default BookSearch
