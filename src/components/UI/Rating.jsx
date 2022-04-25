import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
  return (
    <div className="book__ratings">
      {/* Render full Star */}
      {new Array(Math.floor(rating)).fill(0).map((_, i) => (
        <FaStar key={i} />
      ))}
      {/* Render half Star */}
      {!Number.isInteger(rating) && <FaStarHalfAlt />}
    </div>
  );
};

export default Rating;
