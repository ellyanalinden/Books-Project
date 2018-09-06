import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class ReadShelf extends React.Component{

  /* Default Props, undefined gets converted to array, render won't trigger error*/
  static defaultProps = { books: [] }

  render(){

    const { books, changeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
            books
            .filter(book => book.shelf === 'read')
            .map(book => (
              <li key={ book.id } >
                <BookList
                  book={ book }
                  changeShelf={ changeShelf }
                  currentShelf="read"
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


ReadShelf.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
}


export default ReadShelf
