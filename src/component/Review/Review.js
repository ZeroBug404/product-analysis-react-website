import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, rating, review} = props.review;
    return (
        <div className='reviews'>
            <p>Name: {name}</p>
            <p>Review: {review}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default Review;