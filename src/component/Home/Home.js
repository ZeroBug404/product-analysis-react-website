/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReview";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
    const [reviews, setReviews] = useReviews();

  return (
    <div>
      <div className="main-header">
        <div className="main-header-left">
          <h2>Macbook Air Review</h2>
          <p>
            They make its laptops both more powerful and more power-efficient,
            meaning greatly improved performance and battery life. Plus, you get
            other perks, like the ability to run mobile apps originally made for
            iOS.
          </p>
        </div>

        <div className="main-header-right">
          <img src={require("../../macbook-pro-2021-16.jpg")} alt="" />
        </div>
      </div>

      <div className="review-section">
          <h2>Customer Reviews!</h2>
            <div className="review-card">
            {
                reviews.map(review => <Review 
                    key={review.id}
                    review={review}
                    ></Review>)
            }
            </div>
           <div className="review-btn">
           <button >See All Reviews</button>   
           </div> 
      </div>
    </div>
  );
};

export default Home;
