import React from 'react'
import PropTypes from 'prop-types'

const AppTitle = (props) => {
  return(
      <div className="list-books-title">
        <h1>{props.title}</h1>
      </div>
  )
}

AppTitle.defaultProps = {
  title: 'My Reads'
}

AppTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default AppTitle
