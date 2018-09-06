import React from 'react'
import BookList from './BookList'
import AppTitle from './AppTitle'
import BookShelf from './BookShelf'
import AddBook from './AddBook'

class HomePage extends React.Component{
  render() {

    const {books, changeShelf} = this.props

    /*console.log(this.props.books)*/

    return(
      <div className="list-books">
        <AppTitle />
        <BookShelf changeShelf={changeShelf} books={books}/>
        <AddBook />
      </div>
    );
  }
}

export default HomePage
