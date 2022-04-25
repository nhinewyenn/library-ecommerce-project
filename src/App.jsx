import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Books from './pages/Books';
import BookInfo from './pages/BookInfo';
import { bookData } from './data';
import './index.css';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function removeCart(book) {
    setCart(cart.filter(item => item.id !== book.id));
  }

  function noOfItems() {
    let count = 0;
    cart.forEach(item => (count += item.quantity));
    return count;
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(item =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav noOfItems={noOfItems()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books bookData={bookData} />} />
          <Route
            path="/books/:bookId"
            element={<BookInfo bookData={bookData} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                bookData={bookData}
                cart={cart}
                changeQuantity={changeQuantity}
                removeCart={removeCart}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
