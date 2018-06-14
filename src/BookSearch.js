import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookSearch extends React.Component {
    state = {
        searchedBooks: [],
        query: ''
    }

    searchInput = (query) => {
        this.setState({query: query.trim()})

        if (query) {
            BooksAPI.search(query, 20).then((books) => {
                books.length > 0
                    ? this.setState({searchedBooks: books, searchErr: false})
                    : this.setState({searchedBooks: [], searchErr: true})
            })
        }
    }

    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link exact="exact" to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.searchInput(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>)
    }
}

export default BookSearch
