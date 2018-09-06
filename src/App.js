import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import HomePage from './Components/HomePage'
import SearchPage from './Components/SearchPage'

class BooksApp extends React.Component {
  state = { books: [] }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

      <Route exact path='/' render={() => (
        <HomePage
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
      )}/>

      <Route path='/search' render={() => (
        <SearchPage
          changeShelf={this.changeShelf}
          books={this.state.books}
        />
      )}/>

      </div>
    )
  }
}

export default BooksApp
