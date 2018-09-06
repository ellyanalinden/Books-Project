import React from 'react'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'


class BookShelf extends React.Component{
  render(){

    const { books, changeShelf } = this.props

    return(
      <div className="list-books-content">
        <CurrentlyReadingShelf changeShelf={ changeShelf } books={ books } />
        <WantToReadShelf changeShelf={ changeShelf } books={ books } />
        <ReadShelf changeShelf={ changeShelf } books={ books } />
      </div>
    )
  }
}

export default BookShelf
