import React from "react"
import PropTypes from "prop-types"

class ShelfSelector extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfSelect: PropTypes.func.isRequired,
        shelf: PropTypes.string.isRequired
    }

    render() {
        const book = this.props.book;
        return (<select onChange={event => this.props.shelfSelect(book, event.target.value)}>
            <option value="none" disabled>&nbsp;&nbsp;&nbsp;&nbsp;Move to...</option>

            {
                book.shelf === "currentlyReading"
                    ? (<option value="currentlyReading" selected>
                        &#10004; Currently Reading
                    </option>)
                    : (<option value="currentlyReading">&nbsp;&nbsp;&nbsp;&nbsp;Currently Reading</option>)
            }

            {
                book.shelf === "wantToRead"
                    ? (<option value="wantToRead" selected>
                        &#10004; Want to Read
                    </option>)
                    : (<option value="wantToRead">&nbsp;&nbsp;&nbsp;&nbsp;Want to Read</option>)
            }

            {
                book.shelf === "read"
                    ? (<option value="read" selected>
                        &#10004; Read
                    </option>)
                    : (<option value="read">&nbsp;&nbsp;&nbsp;&nbsp;Read</option>)
            }

            {
                book.shelf === "none"
                    ? (<option value="none" selected>
                        None
                    </option>)
                    : (<option value="none">&nbsp;&nbsp;&nbsp;&nbsp;None</option>)
            }
        </select>);
    }
}

export default ShelfSelector;
