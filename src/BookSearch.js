import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShelfSelector from './ShelfSelector'

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
        console.log(this.state.searchedBooks)
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link exact="exact" to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.searchInput(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { this.state.searchedBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{
                                            width: 128,
                                            height: 188,
                                            backgroundImage: `url(${
                                            book.imageLinks.thumbnail})`
                                        }}/>
                                </div>
                                <div className="book-title">
                                    {book.title}
                                </div>
                                
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>)
    }
}

export default BookSearch
