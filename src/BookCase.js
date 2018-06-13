import React from "react"
import BookList from "./BookList"
import PropTypes from "prop-types"

class BookCase extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelves: PropTypes.array.isRequired,
        shelfSelect: PropTypes.func.isRequired
    };

    render() {
        return (<section>
            {
                this.props.shelves.map(shelf => (<div className="bookshelf" key={shelf.shelfId}>
                    <h2 className="bookshelf-title">
                        {
                            shelf.shelfName === "currentlyReading" ?
                            "Currently Reading" :
                            shelf.shelfName === "wantToRead" ?
                            "Want to Read" :
                            shelf.shelfName === "read" ?
                            "Read" : "none"
                        }
                    </h2>
                    <div className="bookshelf-books">
                        <BookList books={this.props.books} shelfName={shelf.shelfName} shelfSelect={this.props.shelfSelect}/>
                    </div>
                </div>))
            }
        </section>);
    }
}

export default BookCase;
