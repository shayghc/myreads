import React from 'react'
import ShelfSelector from './ShelfSelector'
import PropTypes from 'prop-types'

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired,
        shelfSelect: PropTypes.func.isRequired
    }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    book.shelf === this.props.shelfName && (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                        width: 128,
                                        height: 188,
                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                    }}>
                                </div>
                                <div className="book-shelf-changer">
                                    <ShelfSelector shelf={ book.shelf } book={ book } shelfSelect={ this.props.shelfSelect}/>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            {book.authors.map((author, index) => (
                                <div className="book-authors" key={index}>{author}</div>
                            ))}
                        </div>
                    </li>
                )))}
            </ol>
        )
    }
}

export default BookList
