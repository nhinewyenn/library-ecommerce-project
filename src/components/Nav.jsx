import React from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LibraryLogo from '../assets/Library.svg';

const Nav = ({ noOfItems }) => {
  function openMenu() {
    document.body.classList += ' menu--open';
  }

  function closeMenu() {
    document.body.classList.remove('menu--open');
  }

  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FaBars />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FaShoppingCart />
            </Link>
            {noOfItems > 0 && <span className="cart__length">{noOfItems}</span>}
          </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FaTimes />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
