import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Library.svg';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    e.preventDefault();
    setShowModal(prev => !prev);
  }

  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="Footer logo" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>

            {/* About Modal */}
            <Link to="/" className="footer__link" onClick={toggleModal}>
              About
            </Link>
            <Modal
              className="modal__background "
              isOpen={showModal}
              onRequestClose={() => setShowModal(false)}
            >
              <div className="modal__container">
                <h2 className="modal__title">
                  About <span className="purple">Library</span>
                </h2>
                <p className="modal__body">
                  At <span className="purple modal__desc">Library</span>, we
                  believe reading is a timeless form of knowledge and
                  entertainment. Every day, we give people an opportunity to
                  explore over 10,000+ books at affordable prices. Which you
                  will gain instant access to after you've purchased.
                </p>
                <div>
                  <button
                    className="close__btn"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            </Modal>

            <Link to="/books" className="footer__link">
              Books
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Library</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
