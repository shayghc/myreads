import React from 'react'

class BookCase extends React.Component {
    render() {
        return (
            { this.props.shelves.map((shelf) => (
                <div className="bookshelf" key={shelf.shelfId}>
                    <h2 className="bookshelf-title">
                        {shelf.shelfName === 'currentlyReading' ? 'Currently Reading' :
                         shelf.shelfName === 'wantToRead' ? 'Want to Read' :
                         shelf.shelfName === 'read' ? 'Read' : 'none'
                        }
                    </h2>
                    <div className="bookshelf-books">
                        <li>Book</li>
                    </div>
                </div>
            ))}
        )
    }
}

export default BookCase
