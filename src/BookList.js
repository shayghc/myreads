import React from "react"
import PropTypes from "prop-types"
import Book from "./Book"

class BookList extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelfName: PropTypes.string.isRequired,
        shelfSelect: PropTypes.func.isRequired
    };

    render() {
        return (<ol className="books-grid">
            {
                this.props.books.map(book => book.shelf === this.props.shelfName && (<li key={book.id}>
                    <Book book={book} shelfSelect={this.props.shelfSelect}/>
                </li>))
            }
        </ol>);
    }
}

export default BookList;
