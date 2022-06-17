import React from 'react';
import PropTypes from 'prop-types';
// add useDispatch
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const {
    title, author, id, category,
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
      <p>
        Category:
        {' '}
        {category}
      </p>
      <button type="button" onClick={HandleRemove}>
        Remove
      </button>
      <button type="button" onClick={HandleRemove}>
        Remove
      </button>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
