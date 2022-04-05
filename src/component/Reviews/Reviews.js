/* eslint-disable no-unused-vars */
import React from 'react';
import useReviews from '../../hooks/useReview';
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            {
                reviews.map(review => <Review 
                    key={review.id}
                    review={review}
                    ></Review>)
            }
            
        </div>
    );
};

export default Reviews;