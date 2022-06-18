import React, { useState } from 'react';
// add useDispatch
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const InputBook = () => {
  const [inputValues, setInputValues] = useState({
    title: '',
    author: '',
    id: '',
    category: '',
  });
  const dispatch = useDispatch();
  const [errorMsg, setError] = useState('');
  const submitBookToStore = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const { title, author, category } = inputValues;
    const newBook = {
      id,
      title,
      author,
      category,
    };

    if (newBook.title.trim().length === 0) {
      setError('Add a title to submit...');
      setInputValues(newBook);
    } else if (newBook.category === '') {
      setError('Select Category to submit...');
      setInputValues(newBook);
    } else {
      setError('');
      dispatch(postBook(newBook));
      setInputValues({
        title: '',
        author: '',
        id: '',
        category: '',
      });
    }
  };

  const onChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="horizontalDivider" />
      <section>
        <h1 className="titleForm">ADD NEW BOOK</h1>
        <form className="form-container" onSubmit={submitBookToStore}>
          <input
            type="text"
            placeholder="Book title"
            name="title"
            onChange={onChange}
            required
            className="input-text"
          />
          <input
            type="text"
            placeholder="Author name"
            name="author"
            onChange={onChange}
            required
            className="input-text"
          />
          <select
            placeholder="categories"
            name="category"
            onChange={onChange}
            required
            className="categoriesSelect"
          >
            <option value="">Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Poetry">Poetry</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
          </select>
          <button className="buttonAddd" type="submit" onClick={submitBookToStore}>
            Add Book
          </button>
          <small>{errorMsg}</small>
        </form>
      </section>
    </>
  );
};

export default InputBook;
