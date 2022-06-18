import { Link } from 'react-router-dom';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import './pages.css';

const Navbar = () => (
  <header className="navHeader">
    <nav className="navBar">
      <h1>
        Bookstore CMS
      </h1>
      <div className="linkContainer">
        <Link to="/" className="active-link">
          Books
        </Link>
        <Link to="/categories" className="active-link">
          Categories
        </Link>
      </div>
      <div className="profileicon">
        <BsFillPersonFill className="iconprofile" />
      </div>
    </nav>
  </header>
);
export default Navbar;
