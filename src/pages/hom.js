import React from 'react';
// add useSelector
import { useSelector } from 'react-redux';
import InputBook from '../components/InputBook';
import BookList from '../components/BooksList';
import './pages.css';

const HomePage = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <div className="container">
      <div className="inner">
        <BookList bookList={bookList} />
        <InputBook />
      </div>
    </div>
  );
};
export default HomePage;
