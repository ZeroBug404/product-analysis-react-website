import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="main-header">
      <div className="main-header-left">
        <h2>Macbook Air Review</h2>
        <p>
          They make its laptops both more
          powerful and more power-efficient, meaning greatly improved
          performance and battery life. Plus, you get other perks, like the
          ability to run mobile apps originally made for iOS.
        </p>
      </div>

      <div className="main-header-right">
        <img src={require("../../macbook-pro-2021-16.jpg")} alt="" />
      </div>
    </div>
  );
};

export default Home;
