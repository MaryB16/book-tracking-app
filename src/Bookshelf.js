import React, { Component } from 'react';
import BookList from './BookList';

class Bookshelf extends Component {
  state ={
    shelves: [
      {
        name:"Currenty Reading",
        filter:"currentlyReading"
      },
      {
        name:"Want To Read",
        filter:"wantToRead"
      },
      {
        name:"Read",
        filter:"read"
      }
  ]}
  render (){
    return(
      <div className="bookshelves">
        {this.state.shelves.map((shelf,index) => (
          <div className="bookshelf">
            <div className="bookshelves-title">
              <div>{shelf.name}</div>
            </div>
            <BookList
              key ={index}
              books ={this.props.books}
              bookshelf = {shelf}
              updateBooksCallback ={this.props.updateBooksCallback}
            />
          </div>
        ))}
      </div>
  )}
}

export default Bookshelf;
