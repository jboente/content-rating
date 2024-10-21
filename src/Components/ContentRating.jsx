
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
  }
  this.state = {
    likes: 0,
    dislikes: 0
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>Do you like dogs?</p>
        <div className='rating-buttons'>
            <button className='like-button'>I love dogs <3!! ( { this.state.likes } )</button>
            <button className='dislike-button'>Ugh... prefer cats ( { this.state.dislikes } ) </button>
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
