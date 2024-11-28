import React from "react";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/2.webp')",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>Save for Solar</h1>
      <p>Discover the benefits of solar energy and start saving today.</p>
      <Link to="/learn-more" className="btn btn-primary mt-3">
        Learn More
      </Link>
    </div>
  );
};

export default Image;

