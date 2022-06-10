import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ bookList }) => (
  <ul>
    {bookList.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

BookList.propTypes = {
  bookList: PropTypes.arrayOf(
    PropTypes.shape({
      booktitle: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default BookList;
