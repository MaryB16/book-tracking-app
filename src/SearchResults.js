import React, { Component } from 'react';
import BookList from './BookList';

class SearchResults extends Component {
  render () {
    const {query,searchedBooks, noResults } = this.props

    console.log("this is query " + query)

      if(query)
    return (
      <div className="results">
        {(searchedBooks!=null && searchedBooks.length>0) ?(
          <BookList
            books={searchedBooks}
          />
        ) : (
          <p>No results match your query</p>
        )}

      </div>
    )

    else return (
      <div className="search-info">
        <p> Please keep in mind only certain words can be searched</p>
        <p> These search terms can be found here : "https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"</p>
      </div>
      )
  }
}

export default SearchResults