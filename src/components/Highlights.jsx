import React from 'react';
import { FaBolt, FaBookOpen, FaTags } from 'react-icons/fa';
import Highlight from './UI/Highlight';

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FaBolt />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FaBookOpen />}
              title="10,000+ Books"
              para="Library has books in all your favourite categories."
            />
            <Highlight
              icon={<FaTags />}
              title="Affordable"
              para="Get your hand on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
