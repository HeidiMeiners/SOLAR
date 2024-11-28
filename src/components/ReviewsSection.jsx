import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const ReviewsSection = () => {
  const { user } = useContext(AuthContext);  
  const [reviews, setReviews] = useState([]); 

  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);

  useEffect(() => {
    const savedReviews = localStorage.getItem("reviews");
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleAddReview = () => {
    if (newReview.trim()) {
      const newReviewData = {
        username: user?.username || "Anonymous",
        review: newReview,
        rating: newRating,
        date: new Date().toISOString(), 
      };

      const updatedReviews = [...reviews, newReviewData];
      setReviews(updatedReviews);
      localStorage.setItem("reviews", JSON.stringify(updatedReviews)); 

      setNewReview("");
      setNewRating(5);
    }
  };

  return (
    <div id="reviews" className="container my-5">
      <h2>User Reviews</h2>
      <ul className="list-group mb-4">
        {reviews.map((review, index) => (
          <li key={index} className="list-group-item">
            <strong>{review.username}</strong> ({review.rating}★) -{" "}
            <span>{new Date(review.date).toLocaleString()}</span>
            <p>{review.review}</p>
          </li>
        ))}
      </ul>

      {!user ? (
        <div className="alert alert-warning">
          You must be logged in to submit a review.
        </div>
      ) : (
        <>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Write your review"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label>Rating:</label>
            <select
              className="form-select"
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
            >
              <option value={5}>5★</option>
              <option value={4}>4★</option>
              <option value={3}>3★</option>
              <option value={2}>2★</option>
              <option value={1}>1★</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleAddReview}>
            Submit Review
          </button>
        </>
      )}
    </div>
  );
};

export default ReviewsSection;