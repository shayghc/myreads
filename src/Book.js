import React from "react";
import ShelfSelector from "./ShelfSelector";
import bookCover from "./icons/Book.svg.png";
import Authors from './Authors'
import PropTypes from "prop-types";

class Book extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    }

    render() {
        const { book } = this.props;
        // Alternate book cover image if not present in the array
        const bookImage = book.imageLinks
            ? book.imageLinks.thumbnail
            : bookCover;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${bookImage})`
                        }}
                    />
                    <div className="book-shelf-changer">
                        <ShelfSelector
                            shelf={book.shelf}
                            book={book}
                            shelfSelect={this.props.shelfSelect}
                        />
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <Authors book={ book } />
            </div>
        );
    }
}

export default Book;
