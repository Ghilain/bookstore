import React from 'react';
import PropTypes from 'prop-types';
// add useDispatch
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, author, id,
  } = book;
  const dispatch = useDispatch();
  const HandleRemove = () => {
    dispatch(deleteBook(id));
  };
  return (
    <li key={id}>
      <p>
        Book:
        {title}
      </p>
      <p>
        Author:
        {author}
      </p>
      <button type="button" onClick={HandleRemove}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
