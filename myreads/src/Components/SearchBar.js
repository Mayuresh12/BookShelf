import React, { Component } from "react";
import Books from './Books';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  render() {

    /* when the query value is provided, it is used by search function to return matching results;
    if there is no matching search results, an empty <li> elelment is returned
    */
    const { searchBook } = this.props;
    return (
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
            {this.props.isbooksSearched.length > 0 ? (
              this.props.isbooksSearched.map((book) => (
                <li key={book.id}>
                  <Books
                    book={book}
                    updateShelf={this.props.updateShelf}
                  />
                </li>
              ))) : <li></li>}
          </ol>
        </div>
      </div>
    )

  }
}

export default SearchBar;