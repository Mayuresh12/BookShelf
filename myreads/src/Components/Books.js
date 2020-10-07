import React, { Component } from "react";
import BookStatus from './BookStatus';
import NotAvailableImage from "../icons/Not_available.svg";
import PropTypes from "prop-types";
/* 
  Books component will receive book object and display book with the selector button for the status of the book on the shelf.
*/

class Books extends Component {
  render() {
    const { book } = this.props;
    const image = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : NotAvailableImage;
    const author = book.authors ? book.authors : "Unknown";
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
          <BookStatus
            book={book}
            books={this.props.books}
            updateShelf={this.props.updateShelf}
            selectorCheck={this.props.selectorCheck}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}
Books.propTypes = {
  book: PropTypes.object.isRequired
};
export default Books;