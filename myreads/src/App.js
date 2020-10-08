import React, { Component } from 'react';
import Bookshelf from './Components/BookShelf';
import SearchBar from './Components/SearchBar';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  state = {
    books: [],
    isbooksSearched: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }

  fetchData() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books
      })
    });
  }
  componentDidMount() {
    this.fetchData();
  }

  searchBook = (bookToBeSearched) => {
    if (bookToBeSearched.length !== 0) {
      BooksAPI.search(bookToBeSearched).then(isbooksSearched => {
        let searchResult = [];
        for (const serachedBook of isbooksSearched) {
          for (const book of this.state.books) {
            if (serachedBook.id === book.id) {
              serachedBook.shelf = book.shelf
            }
          }
          searchResult.push(serachedBook)
        }
        return searchResult
      }).then((isbooksSearched) => {
        this.setState((prevState) => ({ isbooksSearched }))
      }).catch(isbooksSearched => this.setState({ isbooksSearched: [] }))
    } else {
     // this.setState({ isbooksSearched: [] })
    }
  }

  updateShelf = (bookAddedToTheShelf, shelf) => {
    let booksAddedToTheShelf = this.state.books.filter(book => book.id !== bookAddedToTheShelf.id)
    booksAddedToTheShelf.push(bookAddedToTheShelf)

    BooksAPI.update(bookAddedToTheShelf, shelf).then(response => {
      bookAddedToTheShelf.shelf = shelf
      this.setState({ books: booksAddedToTheShelf })
      this.setState({ isbooksSearched: [] })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Bookshelf
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
            </div>
            <div className="open-search">
              <Link to="/search" className="open-search-button"/>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <SearchBar
            isbooksSearched={this.state.isbooksSearched}
            searchBook={this.searchBook}
            updateShelf={this.updateShelf}
          />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
