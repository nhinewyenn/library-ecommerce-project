import React, { useState } from 'react';
import Book from '../components/UI/Book';

const Books = props => {
  const [bookData, setBookData] = useState(props.bookData);

  // Sort books
  function filterBooks(filter) {
    if (filter === 'LOW_TO_HIGH') {
      setBookData(
        [...bookData].sort(
          (a, b) =>
            (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
        )
      );
    }

    if (filter === 'HIGH_TO_LOW') {
      setBookData(
        [...bookData].sort(
          (a, b) =>
            (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
        )
      );
    }

    if (filter === 'RATING')
      setBookData([...bookData].sort((a, b) => b.rating - a.rating));
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              {/* BOOK HEADER */}
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Books
                </h2>
                <select
                  onChange={e => filterBooks(e.target.value)}
                  id="filter"
                  defaultValue="DEFAULT"
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Price: Low to High</option>
                  <option value="HIGH_TO_LOW">Price: High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>

              {/* BOOKS */}
              <div className="books">
                {bookData &&
                  bookData.map(book => <Book book={book} key={book.id} />)}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
