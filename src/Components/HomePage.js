import React from 'react'
import BookList from './BookList'
import AppTitle from './AppTitle'
import BookShelf from './BookShelf'
import AddBook from './AddBook'

class HomePage extends React.Component{
  render() {
    {/*console.log(this.props.books)*/}
    return(
      <div className="list-books">
        <AppTitle />
        <BookShelf />

        {/*<div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  this.props.books
                  .filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li key={book.id} >
                      <BookList
                        book={book}
                        changeShelf={this.props.changeShelf}
                        currentShelf="currentlyReading"
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {
                    this.props.books
                    .filter(book => book.shelf === 'wantToRead')
                    .map(book => (
                      <li key={book.id} >
                        <BookList
                          book={book}
                          changeShelf={this.props.changeShelf}
                          currentShelf="wantToRead"
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
                {
                  this.props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id} >
                      <BookList
                        book={book}
                        changeShelf={this.props.changeShelf}
                        currentShelf="read"
                      />
                    </li>
                  ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>*/}
        <AddBook />
      </div>
    );
  }

}

export default HomePage
