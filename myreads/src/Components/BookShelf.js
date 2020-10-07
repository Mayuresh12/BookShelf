import React, { Component } from 'react';
import Books from './Books';
import PropTypes from "prop-types";

/*
  Here the books object is filter into three shelf  categories.
*/ 
class BookShelf extends Component {
  render() {
    const { books } = this.props;
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const read = books.filter(book => book.shelf === "read");

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {currentlyReading.map(book => (
                <li key={book.id}>
                  <Books
                    book={book}
                    books={this.props.books}
                    updateShelf={this.props.updateShelf}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {wantToRead.map(book => (
                <li key={book.id}>
                  <Books
                    book={book}
                    books={this.props.books}
                    updateShelf={this.props.updateShelf}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {read.map(book => (
                <li key={book.id}>
                  <Books
                    book={book}
                    books={this.props.books}
                    updateShelf={this.props.updateShelf}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
      </div>
    )

  }
}
BookShelf.propTypes = {
  book: PropTypes.object.isRequired
};
export default BookShelf;