import React from 'react'
import BookList from './BookList'

class BookCase extends React.Component {
    render() {
        return (
            <div>
                { this.props.shelves.map((shelf) => (
                <div className="bookshelf" key={ shelf.shelfId }>
                    <h2 className="bookshelf-title">
                        {shelf.shelfName === 'currentlyReading' ? 'Currently Reading' :
                         shelf.shelfName === 'wantToRead' ? 'Want to Read' :
                         shelf.shelfName === 'read' ? 'Read' : 'none'
                        }
                    </h2>
                    <div className="bookshelf-books">
                        <BookList books={ this.props.books } shelfName={ shelf.shelfName } shelfSelect={ this.props.shelfSelect }/>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}

export default BookCase
