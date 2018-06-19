import React from 'react'

class Authors extends React.Component {
    render() {
        const { book } = this.props
        if (book.authors) {
            return (
                <span>
                    {book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
                </span>
            )
        } else {
            return (
                <div className="book-authors">
                    No named author
                </div>
            )
        }

    }
}

export default Authors
