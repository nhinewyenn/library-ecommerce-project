import React from 'react';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import LibraryLogo from "../assets/Library.svg"

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </a>

        <ul className="nav__links">
        <li className="nav__list">
          <a href="/" className='nav__link'>Home</a>
        </li>
        <li className="nav__list">
          <a href="/" className='nav__link'>Books</a>
        </li>
        <button className='btn__menu'>
         <FaBars/>
        </button>
        <li className="nav__icon">
          <a href="/cart" className='nav__link'>
          <FaShoppingCart/>
          </a>
          <span className="cart__length">2</span>
        </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <FaTimes/>
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link">Home</a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link">Books</a>
            </li>
            <li className="menu__list">
              <a href="/" className="menu__link">Cart</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
}

export default Nav;
