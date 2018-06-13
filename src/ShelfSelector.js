import React from "react"
import PropTypes from "prop-types"

class ShelfSelector extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfSelect: PropTypes.func.isRequired
    }

    render() {
        const book = this.props.book;
        return (<select onChange={event => this.props.shelfSelect(book, event.target.value)}>
            <option value="none" selected disabled>Move to...</option>

            {
                book.shelf === "currentlyReading"
                    ? (<option value="currentlyReading" disabled>
                        Currently Reading
                    </option>)
                    : (<option value="currentlyReading">Currently Reading</option>)
            }

            {
                book.shelf === "wantToRead"
                    ? (<option value="wantToRead" disabled>
                        Want to Read
                    </option>)
                    : (<option value="wantToRead">Want to Read</option>)
            }

            {
                book.shelf === "read"
                    ? (<option value="read" disabled>
                        Read
                    </option>)
                    : (<option value="read">Read</option>)
            }

            {
                book.shelf === "none"
                    ? (<option value="none" disabled>
                        None
                    </option>)
                    : (<option value="none">None</option>)
            }
        </select>);
    }
}

export default ShelfSelector;
