import React from 'react'
import CurrentlyReadingShelf from './CurrentlyReadingShelf'
import WantToReadShelf from './WantToReadShelf'
import ReadShelf from './ReadShelf'


class BookShelf extends React.Component{
  render(){
    return(
      <div className="list-books-content">
        < CurrentlyReadingShelf changeShelf={this.props.changeShelf} books={this.props.books} />
        < WantToReadShelf changeShelf={ this.props.changeShelf } books={ this. props.books } />
        < ReadShelf changeShelf={ this.props.changeShelf } books={ this.props.books } />
      </div>
    )
  }
}

export default BookShelf
