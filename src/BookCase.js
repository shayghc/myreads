import React from "react"
import BookList from "./BookList"
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'

class BookCase extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelves: PropTypes.array.isRequired,
        shelfSelect: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="list-books">
                <header className="list-books-title">
                    <h1>MyReads</h1>
                </header>
                <div className="list-books-content">
                    <section>
                        {
                            this.props.shelves.map(shelf => (
                            <div className="bookshelf" key={shelf.shelfId}>
                                <h2 className="bookshelf-title">
                                    {
                                        shelf.shelfName === "currentlyReading"
                                            ? "Currently Reading"
                                            : shelf.shelfName === "wantToRead"
                                                ? "Want to Read"
                                                : shelf.shelfName === "read"
                                                    ? "Read"
                                                    : "none"
                                    }
                                </h2>
                                <div className="bookshelf-books">
                                    <BookList
                                        books={this.props.books}
                                        shelfName={shelf.shelfName}
                                        shelfSelect={this.props.shelfSelect}
                                    />
                                </div>
                            </div>))
                        }
                    </section>);
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookCase;
