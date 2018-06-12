import React from 'react'

class ShelfSelector extends React.Component {
    render() {
        const book= this.props.book // Blah, blah, blah
        console.log('Shelf', this.props.shelf, ' Book ', book, ' shelfSelect ', this.props.shelfSelect) // Blah, blah, blah
        return (
            <select onChange={ (event) => (this.props.shelfSelect(book, event.target.value)) }>
                <option value="none" disabled="disabled">Move to...</option>
                { this.props.shelf === 'currentlyReading' ? <option value="currentlyReading" disabled="disabled">Currently Reading</option> : <option value="currentlyReading">Currently Reading</option> }
                { this.props.shelf === 'wantToRead' ? <option value="wantToRead" disabled="disabled">Want to Read</option> : <option value="wantToRead">Want to Read</option> }
                { this.props.shelf === 'read' ? <option value="read" disabled="disabled">Read</option> : <option value="read">Read</option> }
                { this.props.shelf === 'none' ? <option value="none" disabled="disabled">None</option> : <option value="none">None</option> }
            </select>
        )
    }
}

export default ShelfSelector
