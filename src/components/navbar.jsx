import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ onFaqClick, onTestimonialClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeState, setActiveState] = useState('Home');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (itemName, customClick, event) => {
    event.preventDefault(); // 🛑 prevent default navigation
    setActiveState(itemName);
    if (customClick && location.pathname === '/') {
      customClick();
    }
  };

  return (
    <nav className="d-flex justify-content-between items-center">
      <img src="/assets/images/Logo.svg" width={'70px'} alt="Logo" />

      <ul
        className="menuList gap-3"
        style={{
          maxHeight: isOpen ? `300px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <li className="item">
          <Link
            to="/"
            onClick={() => setActiveState('Home')}
            className={`link ${activeState === 'Home' ? 'active' : ''}`}
          >
            Home
          </Link>
        </li>
        <li className="item">
          <Link
            to="/why-us"
            onClick={() => setActiveState('Why Us')}
            className={`link ${activeState === 'Why Us' ? 'active' : ''}`}
          >
            Why Us
          </Link>
        </li>
        <li className="item">
          <a
            href="#testimonial"
            onClick={(e) => handleClick('Testimonial', onTestimonialClick, e)}
            className={`link ${activeState === 'Testimonial' ? 'active' : ''}`}
          >
            Testimonial
          </a>
        </li>
        <li className="item">
          <a
            href="#faq"
            onClick={(e) => handleClick('FAQ', onFaqClick, e)}
            className={`link ${activeState === 'FAQ' ? 'active' : ''}`}
          >
            FAQ
          </a>
        </li>
        <li className="item">
          <Link
            to="/about"
            onClick={(e) => setActiveState('About', e)}
            className={`link ${activeState === 'About' ? 'active' : ''}`}
          >
            About
          </Link>
        </li>
      </ul>

      <div className="menu" onClick={toggleMenu}>
        <svg
          className="text-white bi bi-list"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
