import React, { Component } from 'react';
import Books from './Books';
import PropTypes from "prop-types";

/*
  Here the books object is filter into three shelf  categories.
*/ 
class BookShelf extends Component {
  render() {
    const SHELVES = [
      {
        title: 'Currently Reading',
        id: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        id: 'wantToRead'
      },
      {
        title: 'Read',
        id: 'read'
      }
    ];
    const { books } = this.props;
    const currentlyReading = books.filter(book => book.shelf === SHELVES[0].id);
    const wantToRead = books.filter(book => book.shelf === SHELVES[1].id);
    const read = books.filter(book => book.shelf === SHELVES[2].id);

    const Shelf = ({title, books}) => (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map(book => (
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
    );
    return (  
      <div>
        {Shelf({title: SHELVES[0].title, books: currentlyReading })}
        {Shelf({title: SHELVES[1].title, books: wantToRead })}
        {Shelf({title: SHELVES[0].title, books: read }) }
      </div>
    )

  }
}
BookShelf.propTypes = {
  books: PropTypes.array.isRequired
};
export default BookShelf;