import React from 'react';

const InputBook = () => (
  <form action="#" className="form-container">
    <input
      type="text"
      className="input-text"
      placeholder="Book title"
      value=""
      name="booktitle"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Author name"
      value=""
      name="bookauthor"
    />
    <button type="submit">
      Add book
    </button>
  </form>
);

export default InputBook;
