// src/pages/Review.jsx
import React from "react";

export default function Review() {
  const reviews = [
    { id: 1, user: "Alice", comment: "Excellent service!" },
    { id: 2, user: "Bob", comment: "Voiture en parfait état." },
    { id: 3, user: "Charlie", comment: "Très satisfait du service." },
  ];

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <strong>{r.user}:</strong> {r.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}