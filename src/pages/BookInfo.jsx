import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/UI/Rating';
import { FaArrowLeft } from 'react-icons/fa';
import Price from '../components/UI/Price';
import Book from '../components/UI/Book';

const BookInfo = ({ bookData }) => {
  const { bookId } = useParams();
  const books = bookData.find(book => Number(book.id) === Number(bookId));
  console.log(books);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FaArrowLeft />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={books.url}
                  alt="Book Cover"
                  className="book__selected--img"
                />
              </figure>

              <div className="book__selected--description">
                <h2 className="book__selected--title">{books.title}</h2>
                <Rating rating={books.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={books.originalPrice}
                    salePrice={books.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">{books.desc}</p>
                </div>
                <button className="btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {bookData
                .filter(book => book.rating === 5 && +book.id !== +bookId)
                .slice(0, 4)
                .map(book => (
                  <Book book={book} key={bookData.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
