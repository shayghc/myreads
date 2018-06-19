import React from 'react'
import ShelfSelector from "./ShelfSelector"

class Book extends React.Component {
    render() {
        const { book } = this.props
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                            width: 128,
                            height: 188,
                            backgroundImage: `url(${
                            book.imageLinks.thumbnail})`
                        }}/>
                    <div className="book-shelf-changer">
                        <ShelfSelector
                            shelf={ book.shelf }
                            book={ book }
                            shelfSelect={ this.props.shelfSelect }/>
                    </div>
                </div>
                <div className="book-title">
                    { book.title }
                </div>
                {
                    book.authors.map((author, index) => (<div className="book-authors" key={index}>
                        { author }
                    </div>))
                }
            </div>
        )
    }
}

export default Book
