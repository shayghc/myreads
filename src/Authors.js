import React from "react";
import PropTypes from "prop-types";

class Authors extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired
    };

    render() {
        const { book } = this.props;
        // Displays multiple authors on their own line
        // Provides a no author text if book.authors is empty
        if (book.authors) {
            return (
                <span>
                    {book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>
                            {author}
                        </div>
                    ))}
                </span>
            );
        } else {
            return <div className="book-authors">No named author</div>;
        }
    }
}

export default Authors;
