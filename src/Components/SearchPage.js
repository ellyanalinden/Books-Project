import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'

class SearchPage extends React.Component{
  state = {
    books: [],
    searchedBooks: []
  }

  updateBooks = (books) => {
    this.setState({ books: books })
    this.updateSearchedBooks(books);
  }

  updateSearchedBooks = (books) => {
    if(books) {
      BooksAPI.search(books).then((searchedBooks) => {
        if (!searchedBooks || searchedBooks.hasOwnProperty('error')) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks});
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render(){
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.books}
              onChange={(event) => this.updateBooks(event.target.value)}
             />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchedBooks.map(searchedBook => {
              let shelf = "none";

              this.props.books.map (book => (
                book.id === searchedBook.id ? shelf = book.shelf : ''
              ));

              return (
                <li key={searchedBook.id}>
                  <BookList
                    book={searchedBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                  />
                </li>
              );
            })
          }
          </ol>
        </div>
      </div>

    );
  }
}

export default SearchPage
