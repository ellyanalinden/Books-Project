import React from 'react'
import BookList from './BookList'

class CurrentlyReadingShelf extends React.Component{
  
  static defaultProps = { // <-- DEFAULT PROPS
        books: []       // undefined gets converted to array,render won't trigger error
    }

  render(){
    return (
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
    )
  }
}


export default CurrentlyReadingShelf
