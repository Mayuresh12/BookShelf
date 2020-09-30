import React, { Component } from 'react';

class BookStatus extends Component {

  render() {
    const { book, updateShelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(event) => updateShelf(book, event.target.value)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none" selected>None</option>
        </select>
      </div>
    )
  }
}

export default BookStatus;