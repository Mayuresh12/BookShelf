import React from "react";
import Books from './Books';
import { Link } from 'react-router-dom';

const SearchBar = ({searchBook,isbooksSearched,updateShelf}) => (
  <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={event => searchBook(event.target.value)}
              type="text"
              placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {isbooksSearched.length > 0 ? (
              isbooksSearched.map((book) => (
                <li key={book.id}>
                  <Books
                    book={book}
                    updateShelf={updateShelf}
                  />
                </li>
              ))) : <li><p>Book Not Found!</p></li>}
          </ol>
        </div>
      </div>
);

export default SearchBar;